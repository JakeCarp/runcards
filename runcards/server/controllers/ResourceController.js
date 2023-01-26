import { Auth0Provider } from "@bcwdev/auth0provider";
import { resourceService } from "../services/ResourceService";
import BaseController from "../utils/BaseController";
import { CheckRole } from "../utils/CheckRole";

export class ResourceController extends BaseController {
    constructor() {
        super('resource')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getResources)
            .use(CheckRole)
            .post('', this.createResource)
            .put('/:id', this.updateResource)
            .delete('/:id', this.deleteResource)
    }

    async getResources(req, res, next) {
        try {
            const resources = await resourceService.getResources()
            res.send(resources)
        } catch (error) {
            next(error)
        }
    }

    async createResource(req, res, next) {
        try {
            const resource = await resourceService.createResource(req.body)
            res.send(resource)
        } catch (error) {
            next(error)
        }
    }

    async updateResource(req, res, next) {
        try {
            const updated = await resourceService.updateResource(req.params.id, req.body)
            res.send(updated)
        } catch (error) {
            next(error)
        }
    }

    async deleteResource(req, res, next) {
        try {
            const msg = await resourceService.deleteResource(req.params.id)
            res.send(msg)
        } catch (error) {
            next(error)
        }
    }
}