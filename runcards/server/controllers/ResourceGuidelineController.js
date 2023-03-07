import { Auth0Provider } from '@bcwdev/auth0provider'
import { resourceGuidelineListService } from "../services/ResourceGuidelineListService"
import { resourceGuidelineService } from "../services/ResourceGuidelineService"

import BaseController from '../utils/BaseController'
import { CheckRole } from '../utils/CheckRole'

export class ResourceGuidelineController extends BaseController {
  constructor() {
    super('api/resourceGuideline')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllGuidelines)
      .get('/:id/lists', this.getGuidelineListsByGuidelineId)
      .use(CheckRole)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }
  async getGuidelineListsByGuidelineId(req, res, next) {
    try {
      const lists = await resourceGuidelineListService.getGuidelineLists(req.params.id)
      res.send(lists)
    } catch (error) {
      next(error)
    }
  }

  async getAllGuidelines(req, res, next) {
    try {
      const guidelines = await resourceGuidelineService.getAllGuidelines()
      res.send(guidelines)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newForm = await resourceGuidelineService.create(req.body)
      res.send(newForm)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const updated = await resourceGuidelineService.update(req.body, req.params.id)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try {
      const message = await resourceGuidelineService.delete(req.params.id)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
