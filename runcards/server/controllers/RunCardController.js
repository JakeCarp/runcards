import { Auth0Provider } from '@bcwdev/auth0provider'
import { runCardService } from '../services/RunCardService'

import BaseController from '../utils/BaseController'
import { CheckRole } from '../utils/CheckRole'

export class RunCardController extends BaseController {
  constructor() {
    super('api/runcards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:groupId', this.getByGroupId)
      .use(CheckRole)
        .post('', this.create)
      .put('/:id', this.update)
  }

  async getByGroupId(req, res, next) {
    try {
      const form = await runCardService.getByGroupId(req.params.id)
      res.send(form)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newForm = await runCardService.create(req.body)
      res.send(newForm)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const updated = await runCardService.update(req.body, req.params.id)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }
}