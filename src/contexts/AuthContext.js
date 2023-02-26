import React, { createContext } from "react";
import Api from "../Api";

export const AuthContext = createContext({
    login: (matricula, password) => Promise,
    signUp: (nome, matricula, email, password) => Promise
})

export default ({ children }) => {

    const login = async (matricula, password) => {
        const data = await Api.login(matricula, password)
        if (data.token) {
            return true
        }
    }

    const signUp = async (nome, matricula, email, password) => {
        const data = await Api.signUp(nome, matricula, email, password)

    }

    const checkToken = () => {

    }

    return (
        <AuthContext.Provider value={{ login, signUp }}>
            {children}
        </AuthContext.Provider>
    )

}