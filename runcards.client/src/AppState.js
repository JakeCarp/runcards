import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  stations: ['Station 1', 'Station 2', 'Station 3', 'Station 4', 'Station 5'],
  zones: {"Station 1": ['12345', '12435', '12534', '13452', '13524', '14235', '14325'], station2: ['21453', '21543', '24135', '25134'], station3: ['31452', '31542', '34152', '35142'], station4 : ['41235', '41325'], station5: ['51234', '51324', '52134', '53124'], I84: [], deerFlat: ['21453'], wildLife: ['WR214', 'WR241', 'WR412']},
  cards: [],
  timeElapsed: 0
})
