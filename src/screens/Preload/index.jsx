import React, { useEffect } from "react";
import { Image } from "react-native";
import { Container, LoadingIcon } from './styles';
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorageLib.getItem('token');
            if (token) {
                //validar token
            } else {
                setTimeout(() => {
                    navigation.reset({
                        routes: [{ name: 'SignIn' }]
                    });
                }, 2000);
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <Image style={{ width: 200, height: 200 }} source={require('../../assets/logo1.png')} />
            <LoadingIcon size="large" color="black" />
        </Container>
    );
}