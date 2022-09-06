import { dbContext } from '../db/DbContext'

class RunCardService {

  async getByGroupId(id) {
    const cards = await dbContext.RunCard.find({groupId: id})
    return cards
  }

  async create(body) {
    const newCard = await dbContext.RunCard.create(body)
    return newCard
  }

  async update(body, id) {
    const updatedCard = await dbContext.RunCard.findByIdAndUpdate(id, body, { new: true })
    return updatedCard
  }
}
export const runCardService = new RunCardService()