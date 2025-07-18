export const products = {
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    REMOVE_PRODUCT(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    }
  },
  actions: {
    setProducts({ commit }, products) {
      commit('SET_PRODUCTS', products);
    },
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
    removeProduct({ commit }, productId) {
      commit('REMOVE_PRODUCT', productId);
    },
    findProduct({ commit }, productId) {
      commit('FIND_PRODUCT', productId);
    }
  },
  getters: {
    getProducts: state => state.products
  }
}