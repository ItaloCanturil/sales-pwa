export const cart = {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    },
    REMOVE_ITEM(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId);
    },
    UPDATE_ITEM(state, item) {
      state.items = state.items.map(i => {
        if (i.id === item.id) {
          return item;
        }
        return i;
      });
    },
    UPDATE_QUANTITY(state, { id, quantity }) {
      state.items = state.items.map(i => {
        if (i.id === id) {
          i.quantity = quantity;
        }
        return i;
      });
    },
    CLEAR_CART(state) {
      state.items = [];
    }
  },
  getters: {
    items: state => state.items,
    total: state => {
      return state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    cartItemsCount: state => {
      return state.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    }
  }
}