import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GroupService {
    async getGroups() {
        try {
            const res = await api.get("/api/rungroups")
            AppState.emsGroups = res.data.filter(g => g.type === 1)
            Appstate.fireGroups = res.data.filter(g => g.type === 2)
        } catch (error) {
            logger.error(error)
        }
    }

    async createGroup(body) {
        try {
            const res = await api.post("/api/rungroups", body)
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
    async getCardsInMayday() {
        try {
            const group = await api.get("/rungroups/mayday")
            const res = await api.get("/runcards/" + group.id)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
        } catch (error) {
            logger.error(error)
        }
    }

     async getCardsInEmergency() {
        try {
            const group = await api.get("/rungroups/emergency")
            const res = await api.get("/runcards/" + group.id)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
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