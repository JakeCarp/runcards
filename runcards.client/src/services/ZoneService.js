import { AppState } from "../AppState"
import { Zone } from "../models/Zone"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ZoneService {
    async getZones() {
        try {
            const res = await api.get("/api/zone")
            AppState.zones = res.data.map(z => new Zone(z))
        } catch (error) {
            logger.error(error)
        }
    }

    async createZone(body) {
        try {
            const res = await api.post("/api/zone", body)
            AppState.zones.push(new Zone(res.data))
        } catch (error) {
            logger.error(error)
        }
    }
    
    async updateZone(body, id) {
        try {
            const res = await api.put("/api/zone/" + id, body)
            let updated = new Zone(res.data)
            let index = AppState.zones.findIndex(z => z.id === updated.id)
            AppState.zones.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteZone(id) {
        try {
            await api.delete("/api/zone/" + id)
            AppState.zones.filter(z => z.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const zoneService = new ZoneService()