import { AppState } from '../AppState'
import { RunGroup } from '../models/RunGroup'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GroupService {
    async getGroups() {
        try {
          debugger
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
          debugger
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
              AppState.emsGroups.unshift(new RunGroup(res.data))
            } else {
              AppState.fireGroups.unshift(new RunGroup(res.data))
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

    async deleteGroup(id) {
        try {
            const res = await api.delete("/api/rungroups/" + id)
            AppState.emsGroups = AppState.emsGroups.filter(g => g.id !== id)
            AppState.fireGroups = AppState.fireGroups.filter(g => g.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
    async getCardsInMayday() {
        try {
            const group = await api.get("/api/rungroups/mayday")
            const res = await api.get("/api/runcards/" + group.id)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
        } catch (error) {
            logger.error(error)
        }
    }

     async getCardsInEmergency() {
        try {
            const group = await api.get("/api/rungroups/emergency")
            const res = await api.get("/api/runcards/" + group.id)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
        } catch (error) {
            logger.error(error)
        }
    }

    setCurrentGroup(group) {
        AppState.currentGroup = group
    }
}

export const runGroupService = new GroupService()
