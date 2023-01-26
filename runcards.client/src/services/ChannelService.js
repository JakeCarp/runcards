const { AppState } = require("../AppState")
const { Channel } = require("../models/Channel")
const { logger } = require("../utils/Logger")
const { api } = require("./AxiosService")

class ChannelService {
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
    
    async updateChannel(body, id) {
        try {
            const res = await api.put("/api/channel/" + id, body)
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
            AppState.channels.filter(c => c.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const channelService = new ChannelService()