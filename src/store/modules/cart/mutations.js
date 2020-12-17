import { cloneDeep } from 'lodash'

export default {
    setCart (state, payload) {
        state.cart = cloneDeep(payload)
    }
}
