import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../Api";

export const AuthContext = createContext({
    login: (matricula, password) => Promise,
    signUp: (nome, matricula, email, password) => Promise,
    checkToken: (token) => Promise,
    user: {
        id: null,
        nome: null,
        matricula: null,
        email: null
    }
})

export default ({ children }) => {

    const [user, setUser] = useState(null)

    const login = async (matricula, password) => {
        const data = await Api.login(matricula, password)
        if (data.token) {
            await AsyncStorage.setItem('token', data.token)
            setUser(data.user)
            return true
        }
    }

    const signUp = async (nome, matricula, email, password) => {
        const data = await Api.signUp(nome, matricula, email, password)

    }

    const checkToken = async (token) => {
        const data = await Api.checkToken(token)
        if (data.status === 200) {
            setUser(data.data.user[0])
            return true
        }
    }

    return (
        <AuthContext.Provider value={{ login, signUp, checkToken, user }}>
            {children}
        </AuthContext.Provider>
    )

}