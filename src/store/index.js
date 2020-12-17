import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import cart from './modules/cart'
import auth from './modules/auth'

const state = {
    products: []
}

export default {
    state,
    getters,
    mutations,
    actions,
    modules: {
        cart,
        auth
    }
}
