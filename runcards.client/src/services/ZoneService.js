import { AppState } from "../AppState"
import { Zone } from "../models/Zone"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ZoneService {
    async getZones() {
        try {
            const res = await api.get("/api/zone")

            let dict = {}
            res.data.forEach(z => {
                if (dict[z.stationId]) {
                    dict[z.stationId].push(new Zone(z))
                } else {
                    dict[z.stationId] = [new Zone(z)]
                }
            })

            AppState.zones = dict
        } catch (error) {
            logger.error(error)
        }
    }

    async createZone(body) {
        try {
            const res = await api.post("/api/zone", body) 
            const z = res.data
            if (AppState.zones[z.stationId]) {
                    AppState.zones[z.stationId].push(new Zone(z))
                } else {
                    AppState.zones[z.stationId] = [new Zone(z)]
                }
        } catch (error) {
            logger.error(error)
        }
    }
    
    async updateZone(body) {
        try {
            const res = await api.put("/api/zone/" + body.id, body)
            let updated = new Zone(res.data)
            console.log(updated)
            let index = AppState.zones[updated.stationId].findIndex(z => z.id === updated.id)
            AppState.zones[updated.stationId].splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteZone(id, stationId) {
        try {
            console.log(stationId)
            await api.delete("/api/zone/" + id)
            AppState.zones[stationId] = AppState.zones[stationId].filter(z => z.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const zoneService = new ZoneService()