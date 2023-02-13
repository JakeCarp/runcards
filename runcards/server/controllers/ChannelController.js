import { Auth0Provider } from "@bcwdev/auth0provider";
import { channelService } from "../services/ChannelService";
import BaseController from "../utils/BaseController";
import { CheckRole } from "../utils/CheckRole";

export class ChannelController extends BaseController {
    constructor() {
        super('api/channel')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getChannels)
            .use(CheckRole)
            .post('', this.createChannel)
            .put('/:id', this.updateChannel)
            .delete('/:id', this.deleteChannel)
    }
    async getChannels(req, res, next) {
       try {
           const channels = await channelService.getChannels()
           res.send(channels)
       } catch (error) {
            next(error)
       }
    }

    async createChannel(req, res, next) {
        try {
            const newChannel = await channelService.createChannel(req.body)
            res.send(newChannel)
        } catch (error) {
            next(error)
        }
    }
    
    async updateChannel(req, res, next){
        try {
            const updated = await channelService.updatedChannel(req.params.id, req.body)
            res.send(updated)
        } catch (error) {
            next(error)
        }
    }

    async deleteChannel(req, res, next) {
        try {
            const msg = await channelService.deleteChannel(req.params.id)
            res.send(msg)
        } catch (error) {
            next(error)
        }
    }
}