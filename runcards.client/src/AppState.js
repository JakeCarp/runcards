import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  stations: [],
  zones: {},
  channels: [],
  resources: [],
  cards: [],
  I84Groups: [],
  emsGroups: [],
  fireGroups: [],
  currentGroup: {},
  selectedStation: '',
  selectedZone: '',
  currentCard: {},
  resources: [],
  timeElapsed: 0,
  displayedResource: "station1",
  resourceGuidelines: [],
  resourceGuidelineLists: [],
  activeResourceGuideline: {},
  alertSenseLink: 'thing'
})
