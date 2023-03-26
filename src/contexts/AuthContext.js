import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../Api";

export const AuthContext = createContext({
    login: (matricula, password) => Promise,
    checkToken: (token) => Promise,
    user: {
        id: null,
        nome: null,
        matricula: null,
        email: null,
        graduacao: null,
        ies: null,
        campus: null,
    }
})

export default ({ children }) => {

    const [user, setUser] = useState(null)

    const login = async (matricula, password) => {
        const response = await Api.login(matricula, password)
        if (response.status === 200) {
            await AsyncStorage.setItem('token', response.data.token)
            setUser(response.data.user)
            return response.status
        } else {
            return response.status
        }
    }

    const checkToken = async (token) => {
        const response = await Api.checkToken(token)
        if (response.status === 200) {
            setUser(response.data.user[0])
            return response.status
        }
    }

    return (
        <AuthContext.Provider value={{ login, checkToken, user }}>
            {children}
        </AuthContext.Provider>
    )

}