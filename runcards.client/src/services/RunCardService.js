import { AppState } from '../AppState'
import { RunCard } from '../models/RunCard'
import { RunGroup } from '../models/RunGroup'
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

            let newArr = res.data.map(c =>  new RunCard(c))
            let orderedArray = []
            AppState.currentGroup.cards.forEach(c => {
                let selected = newArr.find(card => card.id === c)
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
            const card = new RunCard(res.data)
            const group = AppState.currentGroup
            group.cards.push(card.id)
            await runGroupService.addCardToGroup(group, group.id)
            AppState.cards.push(new RunCard(res.data))
            AppState.currentCard = card
            return card
        } catch (error) {
            logger.error(error)
        }
    }

    async updateCard(body, id) {
        try {
            const res = await api.put("/api/runcards/" + id, body)
            let updated = new RunCard(res.data)
            let index = AppState.cards.findIndex(c => c.id === updated.id)
            AppState.cards.splice(index, 1, updated)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteCard(id) {
        try {
            await api.delete("/api/runcards/" + id)
            let group = AppState.currentGroup
            group.cards = group.cards.filter(c => c !== id)
            await runGroupService.removeCardFromGroup(group, group.id)
        } catch (error) {
           logger.error(error)
        }
    }

    setCurrentCard(card) {
        AppState.currentCard = card
    }

    setCards(cards) {
        AppState.cards = cards
    }
}

export const runCardService = new CardService()
