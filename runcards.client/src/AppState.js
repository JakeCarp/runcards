import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  stations: {
    station1: { name: "Station 1", zones: ['12345', '12435', '12534', '13452', '13524', '14235', '14325'], id: 1},
      station2: { name: "Station 2", zones: ['21453', '21543', '24135', '25134'], id: 2 },
      station3: { name: "Station 3", zones: ['31452', '31542', '34152', '35142'], id: 3 },
      station4: { name: "Station 4", zones: ['41235', '41325'], id: 4 },
      station5: { name: "Station 5", zones: ['51234', '51324', '52134', '53124'], id: 5 },
      I84: { name: "I84", zones: ['I84'], id: 6},
      deerFlat: { name: "Deerflat", zones: ['21453'], id: 7 },
      wildLife: { name: "Wildlife", zones: ['WR214', 'WR241', 'WR412'], id: 8 }
  },
  channels: ['C1 CHARLES-1', 'C2 CHARLES-2', 'C3 CHARLES-3', 'C4 CHARLES-4', 'C5 CHARLES-5', 'C6 CHARLES-6', 'C7 CHARLES-7 MA', 'C8 CHARLES-8', 'C9 CHARLES-9', 'C10 CHARLES-10'],
  cards: [],
  emsGroups: [],
  fireGroups: [],
  currentGroup: {},
  currentCard: {},
  timeElapsed: 0
})
