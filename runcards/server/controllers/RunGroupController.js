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
      .get('/:id', this.getById)
      .get('/specialGroup/mayday', this.getMayday)
      .get('/specialGroup/emergency', this.getEmergency)
      .use(CheckRole)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const groups = await runGroupService.getAll()
      res.send(groups)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const group = await runGroupService.getById(req.params.id)
      res.send(group)
    } catch (error) {
      next(error)
    }
  }

  async getMayday(req, res, next) {
    try {
      const group = await runGroupService.getMayday()
      res.send(group)
    } catch (error) {
      next(error)
    }
  }

  async getEmergency(req, res, next) {
    try {
      const group = await runGroupService.getEmergency()
      res.send(group)
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

  async delete(req, res, next){
    try {
      const message = await runGroupService.delete(req.params.id)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }
}