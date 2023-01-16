import { AppState } from '../AppState'
import { RunGroup } from '../models/RunGroup'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GroupService {
    async getGroups() {
        try {
            const res = await api.get("/api/rungroups")
            const emsGroups = res.data.filter(g => g.type === 1)

            const fireGroups = res.data.filter(g => g.type === 2)
            AppState.emsGroups = emsGroups.map(g => new RunGroup(g))
            AppState.fireGroups = fireGroups.map(g => new RunGroup(g))
        } catch (error) {
            logger.error(error)
        }
    }

    async getGroupById(id) {
        try {
            const res = await api.get("/api/rungroups/" + id)
            AppState.currentGroup = new RunGroup(res.data)
        } catch (error) {
            logger.error(error)
        }
    }

    async createGroup(body) {
        try {
            const res = await api.post("/api/rungroups", body)
            if(res.data.type === 1){
              AppState.emsGroups.push(new RunGroup(res.data))
            } else {
              AppState.fireGroups.push(new RunGroup(res.data))
            }
        } catch (error) {
            logger.error(error)
        }
    }

    async updateGroup(body, id) {
        try {
            const res = await api.put("/api/rungroups/" + id, body)
            let updated = new RunGroup(res.data)
            if (updated.type === 1) {
                let index = AppState.emsGroups.findIndex(g => g.id === updated.id)
                AppState.emsGroups.splice(index, 1, updated)
            } else {
                let index = AppState.fireGroups.findIndex(g => g.id === updated.id)
                AppState.fireGroups.splice(index, 1, updated)
            }
        } catch (error) {
            logger.error(error)
        }
    }

    async addCardToGroup(body, id) {
        try {
            const res = await api.put("/api/rungroups/" + id, body)
            let updated = new RunGroup(res.data)
            AppState.currentGroup = updated
        } catch (error) {
            logger.error(error)
        }
    }

    async removeCardFromGroup(body, id) {
        try {
            const res = await api.put("/api/rungroups/" + id, body)
            let updated = new RunGroup(res.data)
            AppState.currentGroup = updated
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteGroup(id) {
        try {
            const res = await api.delete("/api/rungroups/" + id)
            AppState.emsGroups = AppState.emsGroups.filter(g => g.id !== id)
            AppState.fireGroups = AppState.fireGroups.filter(g => g.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
    async getMaydayGroup() {
        try {
            const res = await api.get("/api/rungroups/specialGroup/mayday")
            console.log(res.data)
            const group = new RunGroup(res.data)
            AppState.currentGroup = group
            AppState.cards = group.cards
            AppState.currentCard = group.cards[0]
            return new RunGroup(res.data)
        } catch (error) {
            logger.error(error)
        }
    }

     async getEmergencyGroup() {
        try {
            const res = await api.get("/api/rungroups/specialGroup/emergency")
            console.log(res.data)
            const group = new RunGroup(res.data)
            AppState.currentGroup = group
            AppState.cards = group.cards
            AppState.currentCard = group.cards[0]
        } catch (error) {
            logger.error(error)
        }
    }

    setCurrentGroup(group) {
        AppState.currentGroup = group
    }
}

export const runGroupService = new GroupService()
