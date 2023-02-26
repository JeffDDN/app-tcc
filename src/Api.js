import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.15.30:80',
    headers: {
        Accept: 'application/json',
        'acontent-Type': 'application/json'
    }
})

export default {
    checkToken: async () => {

    },

    login: async (matricula, password) => {
        try {
            const response = await api.post('/login', { matricula, password })
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    signUp: async (nome, matricula, email, password) => {
        try {
            const response = await api.post('/cadastrar', { nome, matricula, email, password })
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}