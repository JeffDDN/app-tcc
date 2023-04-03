import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from "../screens/Home";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { setModalVisible } from "../redux/reducers/modalReducer";

const Stack = createNativeStackNavigator();

export default () => {

    const dispath = useDispatch()

    return (
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                animation: 'slide_from_right',
                headerShown: true,
                headerTransparent: true,
                title: 'Cadastro',
                headerBackTitle: "voltar"
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: true,
                title: 'Qr Presence',
                headerTintColor: 'rgba(0,0,0,0.7)',
                headerStyle: {
                    backgroundColor: '#7FFFD4',
                    shadowColor: '#000',
                },
                headerTitleAlign: "center",
                headerLeft: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../assets/qr-code.png')} />
                    </View>
                ),
                headerRight: () => (
                    <>
                        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => dispath(setModalVisible(true))}>
                            <FontAwesome name="user-circle" size={30} color="rgba(0,0,0,0.6)" />
                        </TouchableOpacity>
                    </>
                )
            }} />
        </Stack.Navigator >
    )
};
