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

    async createGroup(body) {
        try {
            const res = await api.post("/rungroups", body)
            AppState.groups.unshift(res.data)
        } catch (error) {
            logger.error(error)
        }
    }

    async updateGroup(body, id) {
        try {
            const res = await api.put("/rungroups/" + id, body)
            let updated = res.data
            let index = Appstate.groups.findIndex(g => g.id === updated.id)
            Appstate.groups.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteGroup(id) {
        try {
            const res = await api.delete("/rungroups/" + id)
            Appstate.groups = Appstate.groups.filter(g => g.id === id)
        } catch (error) {
            logger.error(error)
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