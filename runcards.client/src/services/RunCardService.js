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
            console.log("res", res.data)

            let newArr = res.data.map(c =>  new RunCard(c))
            let orderedArray = []
            AppState.currentGroup.cards.forEach(c => {
                let selected = newArr.find(card => card.id === c)
                orderedArray.push(selected)
            });
            console.log(orderedArray)
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
            group.cards.unshift(card.id)
            await runGroupService.addCardToGroup(group, group.id)
            AppState.cards.unshift(new RunCard(res.data))
            AppState.currentCard = card
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
            const res = await api.delete("/api/runcards/" + id)
            Appstate.cards = AppState.cards.filter(c => c.id === id)
        } catch (error) {
           logger.error(error)
        }
    }

    setCurrentCard(card) {
        AppState.currentCard = card
    }
}

export const runCardService = new CardService()
