import { dbContext } from '../db/DbContext'

class RunGroupService {
  async getAll() {
    const groups = await dbContext.RunGroup.find()
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

  async delete(id) {
    await dbContext.RunGroup.findByIdAndDelete(id)
    return 'Run Group Deleted'
  }
}
export const runGroupService = new RunGroupService()