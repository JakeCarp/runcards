import { AppState } from "../AppState"
import { Channel } from "../models/Channel"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ChannelService {

    async getAlertsense() {
        try {
            const res = await api.get("/api/channel/alertsense")
            AppState.alertSenseLink = res.data
        } catch (error) {
            logger.error(error)
        }
    }

    async updateAlertsense(newLink) {
        try {
            const res = await api.put("/api/channel/alertsense", newLink)
            AppState.alertSenseLink = res.data
        } catch (error) {
            logger.error(error)
        }
    }
    
    async getChannels() {
        try {
            const res = await api.get("/api/channel")
            AppState.channels = res.data.map(c => new Channel(c))
        } catch (error) {
            logger.error(error)
        }
    }

    async createChannel(body) {
        try {
            const res = await api.post("/api/channel", body)
            AppState.channels.push(new Channel(res.data))
        } catch (error) {
            logger.error(error)
        }
    }
    
    async updateChannel(body) {
        try {
            console.log(body)
            const res = await api.put("/api/channel/" + body.id, body)
            let updated = new Channel(res.data)
            let index = AppState.channels.findIndex(c => c.id === updated.id)
            AppState.channels.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteChannel(id) {
        try {
            await api.delete("/api/channel/" + id)
            AppState.channels = AppState.channels.filter(c => c.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const channelService = new ChannelService()