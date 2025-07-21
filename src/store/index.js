import Vue from 'vue'
import Vuex from 'vuex'
import { products } from './modules/products'
import { cart } from './modules/cart'
import { sales } from './modules/sales'
import { localStoragePlugin } from './plugins/persistedState'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      products,
      cart,
      sales
    },
    plugins: [localStoragePlugin],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
