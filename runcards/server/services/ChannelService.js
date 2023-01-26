import { dbContext } from "../db/DbContext";

class ChannelService {
    async getChannels() {
        const channels = await dbContext.Channel.find()
        return channels
    }
    async createChannel(body) {
        const newChannel = await dbContext.Channel.create(body)
        return newChannel
    }
    async updatedChannel(id, body) {
        const updatedChannel = await dbContext.Channel.findByIdAndUpdate(id, body)
        return updatedChannel
    }
    async deleteChannel(id) {
        await dbContext.Channel.findByIdAndDelete(id)
        return "Channel Deleted"
    }
    
}

export const channelService = new ChannelService()