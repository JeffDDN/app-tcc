import React, { useContext, useState } from "react";
import { View, Image, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from "../screens/Home";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ModalContainer, ModalContent, ModalHeader, CloseArea, CloseButton, ModalMiddle, Fieldset, FieldTitle } from "./styles";
import { AuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();

export default () => {

    const [modalVisible, setModalVisible] = useState(false)
    const navigate = useNavigation()
    const auth = useContext(AuthContext)

    const nomeAluno = () => {
        let Nome = auth.user.nome.split(' ')
        let qtd = Nome.length
        return Nome[0] + ' ' + Nome[qtd - 1]
    }

    const handleLogout = async () => {
        await AsyncStorage.clear()
        setModalVisible(false)
        navigate.reset({
            routes: [{ name: 'Preload' }]
        })
    }

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
                title: 'Cadastro'
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
                        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => setModalVisible(!modalVisible)}>
                            <FontAwesome name="user-circle" size={30} color="rgba(0,0,0,0.6)" />
                        </TouchableOpacity>

                        {/* Modal do Perfil */}
                        <Modal
                            visible={modalVisible}
                            transparent={true}
                            animationType='fade'
                            onRequestClose={() => setModalVisible(!modalVisible)}
                            statusBarTranslucent={true}
                        >
                            <ModalContainer>
                                <ModalContent>
                                    <ModalHeader>
                                        <Text style={{ color: '#FFF', fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#FFF', textAlign: "center", width: 150 }} >{nomeAluno()}</Text>

                                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                            <Ionicons name="close" size={24} color="#FFF" />
                                        </TouchableOpacity>
                                    </ModalHeader>
                                    <ModalMiddle>
                                        <Fieldset>
                                            <FieldTitle>Matrícula</FieldTitle>
                                            <Text style={styles.fieldText}>{auth.user.matricula}</Text>
                                        </Fieldset>
                                        <Fieldset margem='15px'>
                                            <FieldTitle>Graduação</FieldTitle>
                                            <Text style={styles.fieldText}>{auth.user.graduacao}</Text>
                                        </Fieldset>
                                        <Fieldset margem='15px'>
                                            <FieldTitle>IES</FieldTitle>
                                            <Text style={styles.fieldText}>{auth.user.ies}</Text>
                                        </Fieldset>
                                        <Fieldset margem='15px'>
                                            <FieldTitle>Campus</FieldTitle>
                                            <Text style={styles.fieldText}>{auth.user.campus}</Text>
                                        </Fieldset>
                                    </ModalMiddle>
                                    <CloseArea>
                                        <CloseButton onPress={() => handleLogout()}>
                                            <Text style={{ color: '#FFF' }}>Sair do APP</Text>
                                        </CloseButton>
                                    </CloseArea>
                                </ModalContent>
                            </ModalContainer>
                        </Modal>
                    </>
                )
            }} />
        </Stack.Navigator >
    )
};

const styles = StyleSheet.create({
    fieldText: {
        color: '#FFF',
        fontSize: 12
    }
})
