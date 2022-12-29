import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

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

    async getMayday() {
        try {
            const group = await api.get("/rungroups/mayday")
            const res = await api.get("/runcards/" + group.id)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
        } catch (error) {
            logger.error(error)
        }
    }

    async getEmergency() {
        try {
            const group = await api.get("/rungroups/emergency")
            const res = await api.get("/runcards/" + group.id)
            AppState.cards = res.data
            AppState.currentCard = res.data[0]
        } catch (error) {
            logger.error(error)
        }
    }

    async createCard() {
        try {

        } catch (error) {
            
        }
    }

    async updateCard() {
        try {
            
        } catch (error) {
            
        }
    }

    async deleteCard() {
        try {
            
        } catch (error) {
            
        }
    }
}

export const runCardService = new CardService()