import { Auth0Provider } from '@bcwdev/auth0provider'
import { runCardService } from '../services/RunCardService'

import BaseController from '../utils/BaseController'
import { CheckRole } from '../utils/CheckRole'

export class RunGroupController extends BaseController {
  constructor() {
    super('api/rungroups')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .use(CheckRole)
      .post('', this.create)
      .put('/:id', this.update)
  }

  async getAll(req, res, next) {
    try {
      const cards = await runCardService.getAll()
      res.send(cards)
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