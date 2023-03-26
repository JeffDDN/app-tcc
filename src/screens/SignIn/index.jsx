import React, { useContext, useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    ImageArea,
    InputArea,
    LoginButton,
    LoginText,
    SignUpText,
    SignUpTextArea,
    SignUpButton,
    SignUpButtonText,
} from './styles'
import InputCustom from "../../components/InputCustom";
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../../contexts/AuthContext";
import AwesomeAlert from 'react-native-awesome-alerts';

export default () => {

    const navigation = useNavigation();

    const [matriculaField, setMatriculaField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [showAlert, setShowAlert] = useState(false)
    const [showLoadAlert, setShowLoadAlert] = useState(false)
    const auth = useContext(AuthContext)

    const SignUpScreen = () => {
        navigation.navigate('SignUp')
    }

    const LoginClick = async () => {
        if (matriculaField != '' && passwordField != '') {
            setShowLoadAlert(true)
            const status = await auth.login(matriculaField, passwordField)
            if (status === 200) {
                setShowLoadAlert(false)
                navigation.reset({
                    routes: [{ name: 'Home' }]
                });
            } else {
                setShowAlert(true)
                setShowLoadAlert(false)
            }

        } else {
            setShowAlert(true)
        }

    }

    return (
        <Container>
            <ImageArea>
                <Image style={{ width: 120, height: 120, marginTop: 20 }} source={require('../../assets/logo1.png')} />
            </ImageArea>
            <InputArea>
                <InputCustom
                    placeholder="Matrícula"
                    value={matriculaField}
                    onChangeText={t => setMatriculaField(t)}
                    Icon={AntDesign}
                    iconName="idcard"
                    margin={true}
                    type='number'
                />
                <InputCustom
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                    Icon={AntDesign}
                    iconName="lock"
                />

                <LoginButton onPress={LoginClick}>
                    <LoginText>Login</LoginText>
                </LoginButton>
            </InputArea>

            <SignUpTextArea>
                <SignUpText>Ainda não possui uma conta?</SignUpText>
                <SignUpButton onPress={SignUpScreen}>
                    <SignUpButtonText>Cadastre-se</SignUpButtonText>
                </SignUpButton>
            </SignUpTextArea>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Ops..."
                message="Matrícula ou senha incorreta!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                cancelButtonColor="#7FFFD4"
                cancelButtonTextStyle={{ color: "rgba(0,0,0,0.7)" }}
                cancelText="Tentar novamente"
                onCancelPressed={() => {
                    setShowAlert(false);
                }}
                onDismiss={() => {
                    setShowAlert(false);
                }}
            />
            <AwesomeAlert show={showLoadAlert} closeOnTouchOutside={false} closeOnHardwareBackPress={false} showProgress={true} progressColor="rgba(0,0,0,0.7)" />
        </Container>
    );
}