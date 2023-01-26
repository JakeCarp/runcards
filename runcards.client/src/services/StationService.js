const { AppState } = require("../AppState");
const { Station } = require("../models/Station");
const { logger } = require("../utils/Logger");
const { api } = require("./AxiosService");


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
    
    async updateStation(body, id) {
        try {
            const res = await api.put("/api/station/" + id, body)
            let updated = new Station(res.data)
            let index = AppState.stations.findIndex(s => s.id === updated.id)
            AppState.stations.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteStation(id) {
        try {
            await api.delete("/api/station/" + id)
            AppState.stations.filter(s => s.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const stationService = new StationService()