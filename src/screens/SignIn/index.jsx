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

export default () => {

    const navigation = useNavigation();

    const [matriculaField, setMatriculaField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const auth = useContext(AuthContext)

    const SignUpScreen = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });
    }

    const LoginClick = async () => {
        if (matriculaField != '' && passwordField != '') {
            const isLogged = await auth.login(matriculaField, passwordField)
            if (isLogged) {
                // navigation.reset({
                //     routes: [{ name: 'Home' }]
                // });
                navigation.navigate('Home');
            } else {
                alert('email ou senha incorreto')
            }

        } else {
            alert('email ou senha incorreto')
        }

    }

    return (
        <Container>
            <ImageArea>
                <Image style={{ width: 120, height: 120, marginTop: 20 }} source={require('../../assets/logo1.png')} />
            </ImageArea>
            <InputArea>
                <InputCustom
                    placeholder="Matricula"
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
        </Container>
    );
}