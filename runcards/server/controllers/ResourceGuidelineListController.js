import { Auth0Provider } from '@bcwdev/auth0provider'
import { resourceGuidelineListService } from "../services/ResourceGuidelineListService"

import BaseController from '../utils/BaseController'
import { CheckRole } from '../utils/CheckRole'

export class ResourceGuidelineListController extends BaseController {
  constructor() {
    super('api/resourceGuidelineList')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .use(CheckRole)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }
  async create(req, res, next) {
    try {
      const newForm = await resourceGuidelineListService.create(req.body)
      res.send(newForm)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const updated = await resourceGuidelineListService.update(req.body, req.params.id)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try {
      const message = await resourceGuidelineListService.delete(req.params.id)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
