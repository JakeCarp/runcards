import { AppState } from '../AppState'
import { RunCard } from '../models/RunCard'
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
            const res = await api.get("/api/runcards/" + groupId)
            res.data.map(c => new RunCard(c))
            let orderedArray = []
            AppState.currentGroup.cards.forEach(c => {
                let selected = res.data.find(card => card.id === c.id)
                orderedArray.push(selected)
            });
            AppState.cards = orderedArray
            AppState.currentCard = orderedArray[0]
        } catch (error) {
            logger.error(error)
        }
    }   
    async createCard(body) {
        try {
            const res = await api.post("/api/runcards", body)
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
            const res = await api.put("/api/runcards/" + id, body)
            let updated = res.data
            let index = Appstate.cards.findIndex(c => c.id === updated.id)
            Appstate.cards.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteCard(id) {
        try {
            const res = await api.delete("/api/runcards/" + id)
            Appstate.cards = AppState.cards.filter(c => c.id === id)
        } catch (error) {
           logger.error(error)
        }
    }
}

export const runCardService = new CardService()