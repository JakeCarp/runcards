import mongoose from 'mongoose'
import { logger } from '../utils/Logger'

mongoose.connection.on('error', err => {
  logger.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
  logger.log('DbConnection Successful')
})

export class DbConnection {
  static async connect(connectionstring = 'mongodb+srv://Dispatcher:Rapid_admin123!@cluster0.hvfhpde.mongodb.net/?retryWrites=true&w=majority') {
    const status = 0
    try {
      const status = await mongoose.connect(connectionstring)
      logger.log('[CONNECTION TO DB SUCCESSFUL]')
      return status
    } catch (e) {
      logger.error(
        '[MONGOOSE CONNECTION ERROR]:',
        'Invalid connection string'
      )
      return status
    }
  }
}
