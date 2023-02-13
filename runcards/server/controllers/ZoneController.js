import { Auth0Provider } from "@bcwdev/auth0provider";
import { zoneService } from "../services/ZoneService";
import BaseController from "../utils/BaseController";
import { CheckRole } from "../utils/CheckRole";


export class ZoneController extends BaseController {
    constructor() {
        super('api/zone')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getZones)
            .use(CheckRole)
            .post('', this.createZone)
            .put('/:id', this.updateZone)
            .delete('/:id', this.deleteZone)
    }

    async getZones(req, res, next) {
        try {
            const zones = await zoneService.getZones()
            res.send(zones)
        } catch (error) {
            next(error)
        }
    }

    async createZone(req, res, next) {
        try {
            const zone = await zoneService.createZone(req.body)
            res.send(zone)
        } catch (error) {
            next(error)
        }
    }

    async updateZone(req, res, next) {
        try {
            const zone = await zoneService.updateZone(req.params.id, req.body)
            res.send(zone)
        } catch (error) {
            next(error)
        }
    }

    async deleteZone(req, res, next) {
        try {
            const msg = await zoneService.deleteZone(req.params.id)
            res.send(msg)
        } catch (error) {
            next(error)
        }
    }
}