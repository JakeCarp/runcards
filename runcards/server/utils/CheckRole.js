import { Unauthorized } from '@bcwdev/auth0provider/lib/Errors'
import { logger } from './Logger'
export function CheckRole(req, res, next) {
  logger.log('Checking the users role', req.userInfo)
  if (!req.userInfo.roles.includes("admin")) {
    throw new Unauthorized('You are not an admin and cannot preform this action')
  }
  next()
}
