import { AppState } from '../AppState'
import { RunGroup } from '../models/RunGroup'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { runCardService } from './RunCardService'

class GroupService {
    async getGroups(id) {
        try {
            const res = await api.get(`/api/rungroups/zone/${id}`)
            const emsGroups = res.data.filter(g => g.type === 1)

            const fireGroups = res.data.filter(g => g.type === 2)

            const I84Groups = res.data.filter(g => g.type === 3)
            AppState.emsGroups = emsGroups.map(g => new RunGroup(g))
            AppState.fireGroups = fireGroups.map(g => new RunGroup(g))

            AppState.I84Groups = I84Groups.map(g => new RunGroup(g))
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
            } else if(res.data.type === 2) {
              AppState.fireGroups.push(new RunGroup(res.data))
            } else {
                AppState.I84Groups.push(new RunGroup(res.data))
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
            } else if(updated.type === 2) {
                let index = AppState.fireGroups.findIndex(g => g.id === updated.id)
                AppState.fireGroups.splice(index, 1, updated)
            } else {
                let index = AppState.I84Groups.findIndex(g => g.id === updated.id)
                AppState.I84Groups.splice(index, 1, updated)
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
            await runCardService.getCardsInGroup(updated.id)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteGroup(id) {
        try {
            const res = await api.delete("/api/rungroups/" + id)
            AppState.emsGroups = AppState.emsGroups.filter(g => g.id !== id)
            AppState.fireGroups = AppState.fireGroups.filter(g => g.id !== id)

            AppState.I84Groups = AppState.I84Groups.filter(g => g.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
    async getMaydayGroup() {
        try {
            const res = await api.get("/api/rungroups/specialGroup/mayday")
            const group = new RunGroup(res.data)
            return group
        } catch (error) {
            logger.error(error)
        }
    }

     async getEmergencyGroup() {
        try {
            const res = await api.get("/api/rungroups/specialGroup/emergency")
            const group = new RunGroup(res.data)
            return group
        } catch (error) {
            logger.error(error)
        }
    }

    setCurrentGroup(group) {
        AppState.currentGroup = group
    }
}

export const runGroupService = new GroupService()
