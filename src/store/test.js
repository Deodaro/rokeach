export default {
  state: {
    cardsList: [
      {
        id: 1,
        title:'Активная деятельная жизнь (полнота и эмоциональная насыщенность жизни)'
      },
      {
        id: 2,
        title: 'Жизненная мудрость (зрелость суждений и здравый смысл, достигаемые жизненным опытом)'
      },
      {
        id: 3,
        title: 'Здоровье (физическое и психическое)'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getCardsList (state) {
      return state.cardsList
    }
  }
}