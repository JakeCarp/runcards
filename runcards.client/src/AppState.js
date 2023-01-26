import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  stations: [],
  zones: [],
  channels: [],
  resources: [],
  cards: [],
  emsGroups: [],
  fireGroups: [],
  currentGroup: {},
  selectedStation: '',
  selectedZone: '',
  currentCard: {},
  timeElapsed: 0
})
