import { Auth0Provider } from "@bcwdev/auth0provider";
import { stationService } from "../services/StationService";
import BaseController from "../utils/BaseController";
import { CheckRole } from "../utils/CheckRole";


export class StationController extends BaseController {
    constructor() {
        super('station')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getStations)
            .use(CheckRole)
            .post('', this.createStation)
            .put('/:id', this.updateStation)
            .delete('/:id', this.deleteStation)
    }

    async getStations(req, res, next) {
        try {
            const stations = await stationService.getStations()
            res.send(stations)
        } catch (error) {
            next(error)
        }
    }
    async createStation(req, res, next) {
        try {
            const station = await stationService.createStation(req.body)
            res.send(station)
        } catch (error) {
            next(error)
        }
    }

    async updateStation(req, res, next) {
        try {
            const updatedStation = await stationService.updateStation(req.params.id, req.body)
            res.send(updatedStation)
        } catch (error) {
            next(error)
        }
    }

    async deleteStation(req, res, next) {
        try {
            const msg = await stationService.deleteStation(req.params.id)
            res.send(msg)
        } catch (error) {
            next(error)
        }
    }
}