import { AppState } from "../AppState"
import { Resource } from "../models/Resource"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ResourceService {
    async getResources() {
        try {
            const res = await api.get("/api/resource")
            AppState.resources = res.data.map(r => new Resource(r))
        } catch (error) {
            logger.error(error)
        }
    }

    async createResource(body) {
        try {
            const res = await api.post("/api/resource", body)
            AppState.resources.push(new Resource(res.data))
        } catch (error) {
            logger.error(error)
        }
    }
    
    async updateResource(body) {
        try {
            const res = await api.put("/api/resource/" + body.id, body)
            let updated = new Resource(res.data)
            let index = AppState.resources.findIndex(r => r.id === updated.id)
            AppState.resources.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteResource(id) {
        try {
            await api.delete("/api/resource/" + id)
           AppState.resources = AppState.resources.filter(r => r.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const resourceService = new ResourceService()