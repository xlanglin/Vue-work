import gamelist from '@/database/gamelist'

const state = {
    allProduct : []//記錄所有商品
}

const getters = {

}

const mutations = {
    //修改商品數據狀態
    setProducts(state, payload) {
        state.allProduct = payload
    }
}

const actions = {
     async GetProducts({commit}) {
        commit('setProducts', gamelist)
    }

}


export default{
    namespaced: true, 
    state,
    getters,
    mutations,
    actions,
}