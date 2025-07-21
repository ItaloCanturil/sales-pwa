export const sales = {
  namespaced: true,
  state: {
    history: [],
    lastId: 0
  },
  mutations: {
    ADD_SALE(state, { items, total }) {
      const sale = {
        id: ++state.lastId,
        items,
        total,
        date: new Date().toISOString(),
        status: 'completed'
      }
      console.log(sale)
      state.history.push(sale);
    }
  },
  actions: {
    createSale({ commit }, { items, total }) {
      console.log(items)
      commit('ADD_SALE', { items, total })
    }
  },
  getters: {
    getSales: state => state.history,
    getLastSale: state => state.history[state.history.length - 1]
  }
}