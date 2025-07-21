import axios from "axios";

export const products = {
  namespaced: true,
  state: {
    products: [
      {
          id: 1,
          name: 'Product 1',
          price: 10.99,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
        },
        {
          id: 3,
          name: 'Product 3',
          price: 29.99,
        },
        {
          id: 4,
          name: 'Product 4',
          price: 39.99,
        },
        {
          id: 5,
          name: 'Product 5',
          price: 49.99,
        },
    ],
    loading: false,
    error: null,
    searchQuery: ''
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    REMOVE_PRODUCT(state, productId) {
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    setProducts({ commit }, products) {
      commit("SET_PRODUCTS", products);
    },
    addProduct({ commit }, product) {
      commit("ADD_PRODUCT", product);
    },
    removeProduct({ commit }, productId) {
      commit("REMOVE_PRODUCT", productId);
    },
    findProduct({ commit }, productId) {
      commit("FIND_PRODUCT", productId);
    },
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await axios.get("/api/products");
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        commit("SET_ERROR", "Não foi possível carregar os produtos.");
      } finally {
        commit("SET_LOADING", false);
      }
    },
    setSearchQuery({ commit }, query) {
      commit('SET_SEARCH_QUERY', query);
    }
  },
  getters: {
    getProducts: (state) => state.products,
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
    filteredProducts: (state) => {
      const query = state.searchQuery.toLowerCase();
      if (!query) return state.products;
      
      return state.products.filter(product => 
        product.name.toLowerCase().includes(query)
      );
    }
  },
};
