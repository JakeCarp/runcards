import { dbContext } from "../db/DbContext";

class ChannelService {
    async createAlertsense(link) {
        const newLink = await dbContext.Alertsense.create(link)
        return newLink
    }
    async updateAlertsense(body) {
        const alertsenseId = ''
        const newLink = await dbContext.Alertsense.findByIdAndUpdate(alertsenseId, body)
        return newLink
    }
    async getAlertsense() {
        const alertsenseId = ''
        const link = await dbContext.Alertsense.findById(alertsenseId)
        return link
    }
    async getChannels() {
        const channels = await dbContext.Channel.find()
        return channels
    }
    async createChannel(body) {
        const newChannel = await dbContext.Channel.create(body)
        return newChannel
    }
    async updatedChannel(id, body) {
        const updatedChannel = await dbContext.Channel.findByIdAndUpdate(id, body, {new: true})
        return updatedChannel
    }
    async deleteChannel(id) {
        await dbContext.Channel.findByIdAndDelete(id)
        return "Channel Deleted"
    }
    
}

export const channelService = new ChannelService()