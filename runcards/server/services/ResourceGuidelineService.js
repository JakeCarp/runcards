import { dbContext } from "../db/DbContext";


class ResourceGuidelineService{
  async delete(id) {
    await dbContext.ResourceGuideline.findByIdAndDelete(id)
    return 'ResourceGuideline Deleted'
  }
  async update(body, id) {
    const updatedGuideline = await dbContext.ResourceGuideline.findByIdAndUpdate(id, body, { new: true })
    return updatedGuideline
  }
  async create(body) {
    const newGuideline = await dbContext.ResourceGuideline.create(body)
    return newGuideline
  }
  async getAllGuidelines() {
    const guidelines = await dbContext.ResourceGuideline.find()
    return guidelines
  }

}


export const resourceGuidelineService = new ResourceGuidelineService();
