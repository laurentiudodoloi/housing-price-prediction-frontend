import axios from 'axios'
import {API_URL} from "../../../config";

export default {
    async login ({ commit }, { email, password }) {
        return await axios
            .post(`${API_URL}/login`, {
                email,
                password
            })
            .then(r => {
                commit('setUser', r.data)
            })
    },

    async register ({ }, data) {
        return await axios
            .post(`${API_URL}/login`, data)
            .then(r => {
                return r.data
            })
    }
}
