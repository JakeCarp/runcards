import { AppState } from "../AppState"
import { Station } from "../models/Station"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class StationService {
    async getStations() {
        try {
            const res = await api.get("/api/station")
            AppState.stations = res.data.map(s => new Station(s))
        } catch (error) {
            logger.error(error)
        }
    }

    async createStation(body) {
        try {
            const res = await api.post("/api/station", body)
            AppState.stations.push(new Station(res.data))
        } catch (error) {
            logger.error(error)
        }
    }
    
    async updateStation(body) {
        try {
            const res = await api.put("/api/station/" + body.id, body)
            let updated = new Station(res.data)
            console.log(updated)
            let index = AppState.stations.findIndex(s => s.id === updated.id)
            AppState.stations.splice(index, 1, updated)
            console.log(AppState.stations)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteStation(id) {
        try {
            await api.delete("/api/station/" + id)
            AppState.stations = AppState.stations.filter(s => s.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const stationService = new StationService()