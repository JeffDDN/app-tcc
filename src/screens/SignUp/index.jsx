import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    InputArea,
    LoginButton,
    LoginText,
    SignUpText,
    SignUpTextArea,
    SignUpButton,
    SignUpButtonText,
    WelcomeText
} from './styles'
import InputCustom from "../../components/InputCustom";
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from "../../contexts/AuthContext";


export default () => {

    const navigation = useNavigation();
    const auth = useContext(AuthContext)

    const [nameField, setNameField] = useState('');
    const [registerField, setRegisterField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const signInScreen = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    const clickSignUp = async () => {
        if (nameField != '' && registerField != '' && emailField != '' && passwordField != '') {
            const signUp = await auth.signUp(nameField, registerField, emailField, passwordField)
            if (signUp) {
                navigation.reset({
                    routes: [{ name: 'SignIn' }]
                })
            }
        } else {
            alert('Por favor preencha todos os campos')
        }
    }

    return (
        <Container>
            <WelcomeText>Cadastro</WelcomeText>

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
                />

                <InputCustom
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                    Icon={MaterialCommunityIcons}
                    iconName='email-outline'
                    margin={true}
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

            <SignUpTextArea>
                <SignUpText>Já possui uma conta?</SignUpText>
                <SignUpButton onPress={() => signInScreen()}>
                    <SignUpButtonText>Login</SignUpButtonText>
                </SignUpButton>
            </SignUpTextArea>
        </Container>
    );
}