import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GroupService {
    async getGroups() {
        try {
            const res = await api.get("/rungroups")
            AppState.groups = res.data
        } catch (error) {
            logger.error(error)
        }
    }

    async createGroup(data) {
        try {

        } catch (error) {
            
        }
    }

    async updateGroup(data, id) {
        try {
            
        } catch (error) {
            
        }
    }

    async deleteGroup(id) {
        try {
            
        } catch (error) {
            
        }
    }

    async getCardsInGroup(groupId) {
        try {
            const res = await api.get("/runcards/" + groupId)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
        } catch (error) {
            logger.error(error)
        }
    }
}

export const runGroupService = new GroupService()