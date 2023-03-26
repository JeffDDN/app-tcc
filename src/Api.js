import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.15.30:80',
    headers: {
        Accept: 'application/json',
        'acontent-Type': 'application/json'
    }
})

export default {

    login: async (matricula, password) => {
        try {
            const response = await api.post('/login', { matricula, password })
            return response
        } catch (error) {
            return new Error(
                JSON.stringify(error.response) ||
                "Erro: Não foi possível realizar o login"
            )
        }
    },

    signUp: async (nome, matricula, email, password) => {
        try {
            const response = await api.post('/cadastrar', { nome, matricula, email, password })
            return response.status
        } catch (error) {
            return new Error(
                JSON.stringify(error.response) ||
                "Erro: Não foi possível realizar o cadastro"
            )
        }
    },

    checkToken: async (token) => {
        try {
            const response = await api.post('/verify', { token })
            return response
        } catch (error) {
            return new Error(
                JSON.stringify(error.response) ||
                "Erro: Token inválido"
            )
        }
    }
}