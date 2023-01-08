import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { runGroupService } from './RunGroupService'

class CardService {
    setZone(station, zone) {
        AppState.selectedStation = station
        AppState.selectedZone = zone
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

    

   
    async createCard(body) {
        try {
            const res = await api.post("/runcards", body)
            const group = Appstate.currentGroup
            group.cards.unshift(res.data.id)
            runGroupService.updateGroup(group, group.id)
            AppState.cards.unshift(res.data)
        } catch (error) {
            logger.error(error)
        }
    }

    async updateCard(body, id) {
        try {
            const res = await api.put("/runcards/" + id, body)
            let updated = res.data
            let index = Appstate.cards.findIndex(c => c.id === updated.id)
            Appstate.cards.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteCard(id) {
        try {
            const res = await api.delete("/runcards/" + id)
            Appstate.cards = AppState.cards.filter(c => c.id === id)
        } catch (error) {
           logger.error(error)
        }
    }
}

export const runCardService = new CardService()