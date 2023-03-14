import { dbContext } from "../db/DbContext";


class ResourceGuidelineListService{
  async getGuidelineLists(id) {
    const lists = await dbContext.ResourceGuidelineList.find({ResourceGuidelineId: id})
    return lists
  }
  async delete(id) {
    await dbContext.ResourceGuidelineList.findByIdAndDelete(id)
    return 'ResourceGuideline Deleted'
  }
  async update(body, id) {
    const updatedGuideline = await dbContext.ResourceGuidelineList.findByIdAndUpdate(id, body, { new: true })
    return updatedGuideline
  }
  async create(body) {
    const newGuideline = await dbContext.ResourceGuidelineList.create(body)
    return newGuideline
  }
  async getAllGuidelines() {
    const guidelines = await dbContext.ResourceGuidelineList.find()
    return guidelines
  }

}


export const resourceGuidelineListService = new ResourceGuidelineListService();
