import { dbContext } from "../db/DbContext";


class ZoneService {
    async getZones() {
        const zones = await dbContext.Zone.find()
        return zones
    }
    async createZone(body) {
        const zone = await dbContext.Zone.create(body)
        return zone
    }
    async updateZone(id, body) {
        const zone = await dbContext.Zone.findByIdAndUpdate(id, body)
        return zone
    }
    async deleteZone(id) {
        await dbContext.Zone.findByIdAndDelete(id)
        return 'Zone Deleted'
    }

}

export const zoneService = new ZoneService()