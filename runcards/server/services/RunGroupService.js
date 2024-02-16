import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class RunGroupService {
  async getAll() {
    const groups = await dbContext.RunGroup.find()
    return groups
  }

  async getById(id) {
    const group = await dbContext.RunGroup.findById(id)
    return group
  }

  async getByZoneId(id) {
    const groups = await dbContext.RunGroup.find({zoneId: id})
    return groups
  }

  async getMayday() {
    const group = await dbContext.RunGroup.findOne({ type: 3 })
    return group;
  }

  async getEmergency() {
    const group = await dbContext.RunGroup.findOne({ type: 4 })
    return group;
  }
  async create(body) {
    const mayday = await this.getMayday()
    const emerg = await this.getEmergency()

    if (mayday && body.type === 3) {
      throw new Error("There is Already a Mayday Group")
    } else if (emerg && body.type === 4) {
       throw new Error("There is Already an Emergency Group")
    }

    const newGroup = await dbContext.RunGroup.create(body)
    return newGroup
  }

  async update(body, id) {
    const updatedGroup = await dbContext.RunGroup.findByIdAndUpdate(id, body, { new: true })
    return updatedGroup
  }

  async duplicateRunGroupsandCardsForAllZones() {
    const runGroups = await this.getByZoneId('63e95d632d8e354e623eab2d')
    const newRunGroups = []

    
    for (const runGroup of runGroups) {
      const otherZones = await dbContext.Zone.find( {_id: {$ne: '63e95d632d8e354e623eab2d'}})



      for (const zone of otherZones) {
        
        const duplicateRunGroup = await dbContext.RunGroup.create({
          title: runGroup.title,
          description: runGroup.description,
          type: runGroup.type,
          zoneId: zone._id, // Set the zoneId to the current zone
          cards: [] // Clear the cards array for now
        })

        for(const card of runGroup.cards) {
          const originalCard = await dbContext.RunCard.findById(card)
          if(originalCard) {

            const duplicateCard = await dbContext.RunCard.create({
              title: originalCard.title,
              content: originalCard.content,
              groupId: duplicateRunGroup.id
            });
            
            duplicateRunGroup.cards.push(duplicateCard.id)
          }
        }

        await duplicateRunGroup.save()
        newRunGroups.push(duplicateRunGroup)
      }
      
    }
    return newRunGroups
  }

  async delete(id) {
    await dbContext.RunGroup.findByIdAndDelete(id)
    await dbContext.RunCard.deleteMany({groupId: id})
    return 'Run Group Deleted'
  }
}
export const runGroupService = new RunGroupService()
