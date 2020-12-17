import { cloneDeep } from 'lodash'

export default {
    setProducts (state, payload) {
        state.products = cloneDeep(payload)
    }
}
