export default {
    initCart ({ commit }) {
        let cart = localStorage.getItem('cart')

        if (cart) {
            cart = JSON.parse(cart)
        } else {
            cart = []
        }

        localStorage.setItem('cart', JSON.stringify(cart))
        commit('setCart', cart)
    },

    resetCart ({ commit }) {
        localStorage.removeItem('cart')
        commit('setCart', [])
    },

    storeItem ({ commit }, entity) {
        let cart = localStorage.getItem('cart')

        if (!cart) {
            return false
        }

        cart = JSON.parse(cart)

        const index = cart.findIndex(e => {
            return e.id === entity.id
        })

        if (index >= 0) {
            cart.splice(index, 1, entity)
        } else {
            cart.push(entity)
        }

        commit('setCart', cart)

        localStorage.setItem('cart', JSON.stringify(cart))
    },

    removeItem ({ commit }, id) {
        let cart = localStorage.getItem('cart')

        if (!cart) {
            return false
        }

        cart = JSON.parse(cart)

        const index = cart.findIndex(e => {
            return e.id === id
        })

        if (index === -1) {
            return false
        }

        cart.splice(index, 1)

        commit('setCart', cart)

        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
