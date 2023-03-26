import React, { useContext, useEffect } from "react";
import { Image } from "react-native";
import { Container, LoadingIcon } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";

export default () => {

    const navigation = useNavigation();
    const auth = useContext(AuthContext)

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                const response = await auth.checkToken(token)
                if (response === 200) {
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    });
                } else {
                    setTimeout(() => {
                        navigation.reset({
                            routes: [{ name: 'SignIn' }]
                        });
                    }, 1000);
                }
            } else {
                setTimeout(() => {
                    navigation.reset({
                        routes: [{ name: 'SignIn' }]
                    });
                }, 1000);
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <Image style={{ width: 200, height: 200 }} source={require('../../assets/logo1.png')} />
            <LoadingIcon size="large" color="rgba(0,0,0,0.7)" />
        </Container>
    );
}