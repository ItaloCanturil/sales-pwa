export const sales = {
  namespaced: true,
  state: {
    history: []
  },
  mutation: {
    ADD_SALE(state, sale) {
      state.history.push(sale);
    }
  }
}