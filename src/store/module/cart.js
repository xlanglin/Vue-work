
const state = { //購物列表
    cartProducts: [
        {
            id: "1",
            images: "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/D8mYIXWja8knuqYlwqcqVpi1.jpg",
            name: "艾爾登法環",
            price: 1290,
            num: 1,
            sum: 1290
        },
        {
            id: "2",
            images: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
            name: "寶可夢-阿爾宙斯",
            price: 1590,
            num: 2,
            sum: 1590
        },
    ]
}



const getters = {
    totalCount(state) {
        return state.cartProducts.reduce(function (sum, prod) {
            return sum + prod.num

        }, 0)
    },
    totalPrice(state) {
        return state.cartProducts.reduce(function (sum, prod) {
            return sum + prod.sum
        }, 0).toFixed(2)

    }

}

const mutations = {
    addToCart(state, product) {
        const prod = state.cartProducts.find(function (item) {
            return item.id === product.id
        })
        if (prod) {
            prod.num++
            prod.sum = prod.num * prod.price
        } else {
            state.cartProducts.push({
                ...product,
                num: 1,
                sum: product.price
            })
        }
        
    },
    deleteItems(state, prodID) {
        const index = state.cartProducts.findIndex(function (item) {
            return item.id === prodID.id
        })
        index !== -1 && state.cartProducts.splice(index, 1)
    }
}

const actions = {}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}