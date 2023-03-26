import React, { useState } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    InputArea,
    LoginButton,
    LoginText,
} from './styles'
import InputCustom from "../../components/InputCustom";
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Api from "../../Api";
import AwesomeAlert from 'react-native-awesome-alerts';


export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [registerField, setRegisterField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [showFildAlert, setShowFildAlert] = useState(false)
    const [showErroAlert, setShowErroAlert] = useState(false)
    const [showLoadAlert, setShowLoadAlert] = useState(false)
    const [showSuccesAlert, setShowSuccesAlert] = useState(false)

    const clickSignUp = async () => {
        if (nameField != '' && registerField != '' && emailField != '' && passwordField != '') {
            setShowLoadAlert(true)
            const status = await Api.signUp(nameField, registerField, emailField, passwordField)
            if (status === 200) {
                setShowSuccesAlert(true)
                setShowLoadAlert(false)
                setTimeout(() => {
                    navigation.reset({
                        routes: [{ name: 'SignIn' }]
                    })
                }, 1500);
            } else {
                setShowErroAlert(true)
            }
        } else {
            setShowFildAlert(true)
        }
    }

    const customAlertView = () => (
        <>
            <AntDesign name="checkcircle" size={40} color="#28a745" />
            <Text style={{ marginTop: 10, fontSize: 18, color: "rgba(0,0,0,0.7)" }}>Cadastro Realizado com sucesso</Text>
        </>
    )

    return (
        <Container>

            <InputArea>
                <InputCustom
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                    Icon={FontAwesome5}
                    iconName='user'
                    margin={true}
                />

                <InputCustom
                    placeholder="Matrícula"
                    value={registerField}
                    onChangeText={t => setRegisterField(t)}
                    Icon={AntDesign}
                    iconName='idcard'
                    margin={true}
                    type='number'
                />

                <InputCustom
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                    Icon={MaterialCommunityIcons}
                    iconName='email-outline'
                    margin={true}
                    type='email'
                />
                <InputCustom
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                    Icon={AntDesign}
                    iconName='lock'
                />

                <LoginButton onPress={() => clickSignUp()} >
                    <LoginText>Cadastrar</LoginText>
                </LoginButton>
            </InputArea>

            <AwesomeAlert
                show={showFildAlert}
                showProgress={false}
                title="Ops..."
                message="Por favor preencha todos os campos!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                cancelButtonColor="#7FFFD4"
                cancelButtonTextStyle={{ color: "rgba(0,0,0,0.7)" }}
                cancelText="Tentar novamente"
                onCancelPressed={() => {
                    setShowFildAlert(false);
                }}
                onDismiss={() => {
                    setShowFildAlert(false);
                }}
            />
            <AwesomeAlert show={showErroAlert} closeOnTouchOutside={true} closeOnHardwareBackPress={false} title="Algo inesperado aconteceu" message="Erro ao cadastrar" showCancelButton={true} cancelButtonColor="#7FFFD4" cancelButtonTextStyle={{ color: "rgba(0,0,0,0.7)" }} cancelText="Tentar novamente" onCancelPressed={() => { setShowErroAlert(false); }} onDismiss={() => { setShowErroAlert(false); }} />
            <AwesomeAlert show={showLoadAlert} closeOnTouchOutside={false} closeOnHardwareBackPress={false} showProgress={true} progressColor="rgba(0,0,0,0.7)" />
            <AwesomeAlert show={showSuccesAlert} closeOnTouchOutside={false} closeOnHardwareBackPress={false} customView={customAlertView()} />

        </Container>
    );
}