import { dbContext } from "../db/DbContext";


class ResourceService {
    async getResources() {
        const resources = await dbContext.Resource.find()
        return resources
    }
    async createResource(body) {
        const resource = await dbContext.Resource.create(body)
        return resource
    }
    async updateResource(id, body) {
        const resource = await dbContext.Resource.findByIdAndUpdate(id, body)
        return resource
    }
    async deleteResource(id) {
        await dbContext.Resource.findByIdAndDelete(id)
        return 'Resource Deleted'
    }

}
export const resourceService = new ResourceService()