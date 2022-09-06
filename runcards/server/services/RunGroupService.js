import { dbContext } from '../db/DbContext'

class RunGroupService {
  async getAll() {
    const groups = await dbContext.RunGroup.find()
    return groups
  }
  async create(body) {
    const newGroup = await dbContext.RunGroup.create(body)
    return newGroup
  }

  async update(body, id) {
    const updatedGroup = await dbContext.RunGroup.findByIdAndUpdate(id, body, { new: true })
    return updatedGroup
  }
}
export const runGroupService = new RunGroupService()