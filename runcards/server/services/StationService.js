import { dbContext } from "../db/DbContext";


class StationService {
    async getStations() {
        const stations = await dbContext.Station.find()
        return stations
    }
    async createStation(body) {
        const newStation = await dbContext.Station.create(body)
        return newStation
    }
    async updateStation(id, body) {
        const updated = await dbContext.Station.findByIdAndUpdate(id, body, {new: true})
        return updated
    }
    
    async deleteStation(id) {
        await dbContext.Station.findByIdAndDelete(id)
        await dbContext.Zone.deleteMany({stationId: id})
        return 'Station Deleted'
    }
}
export const stationService = new StationService()