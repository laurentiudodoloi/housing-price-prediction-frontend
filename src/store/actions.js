import {API_URL} from "../config";
import axios from 'axios'

export default {
    async getProducts ({ commit }) {
        await axios
            .get(`${API_URL}/products`)
            .then(r => {
                commit('setProducts', r.data)
            })
    },

    async getProduct ({}, id) {
        return await axios
            .get(`${API_URL}/product/${id}`)
            .then(r => {
                return r.data
            })
    }
}
