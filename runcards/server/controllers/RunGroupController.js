import { Auth0Provider } from '@bcwdev/auth0provider'
import { runGroupService } from '../services/RunGroupService'

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
      const groups = await runGroupService.getAll()
      res.send(groups)
    } catch (error) {
      next(error)
    }
  }


  async create(req, res, next) {
    try {
      const newForm = await runGroupService.create(req.body)
      res.send(newForm)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const updated = await runGroupService.update(req.body, req.params.id)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }
}