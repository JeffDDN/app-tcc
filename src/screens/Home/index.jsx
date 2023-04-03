import React, { useContext } from "react";
import { Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Container } from "./styles";
import { ModalContainer, ModalContent, ModalHeader, CloseArea, CloseButton, ModalMiddle, Fieldset, FieldTitle } from "./stylesModal";
import ModalScan from "../../components/Modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setModalVisible } from "../../redux/reducers/modalReducer"

export default () => {

    const navigate = useNavigation()
    const auth = useContext(AuthContext)
    const modal = useSelector((state) => state.modal)
    const dispath = useDispatch()

    const nomeAluno = () => {
        let Nome = auth.user.nome.split(' ')
        let qtd = Nome.length
        return Nome[0] + ' ' + Nome[qtd - 1]
    }

    const handleLogout = async () => {
        await AsyncStorage.clear()
        dispath(setModalVisible(false))
        navigate.reset({
            routes: [{ name: 'Preload' }]
        })
    }

    return (
        <Container>
            {/* Modal do Perfil */}
            <Modal
                visible={modal.modalVisible}
                transparent={true}
                animationType='fade'
                onRequestClose={() => dispath(setModalVisible(false))}
                statusBarTranslucent={true}
            >
                <ModalContainer>
                    <ModalContent>
                        <ModalHeader>
                            <Text style={{ color: '#FFF', fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#FFF', textAlign: "center", width: 150 }} >{nomeAluno()}</Text>

                            <TouchableOpacity onPress={() => dispath(setModalVisible(false))}>
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

            {/* Modal do scanner de Qrcode */}
            <ModalScan />
        </Container>
    );
}

const styles = StyleSheet.create({
    fieldText: {
        color: '#FFF',
        fontSize: 12
    }
})