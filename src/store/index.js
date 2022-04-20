import Vue from "vue"
import Vuex from "vuex"
import product from './module/product'
import cart from './module/cart'

Vue.use(Vuex)

const state = {
}
const getters = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        product,
        cart
      }
})