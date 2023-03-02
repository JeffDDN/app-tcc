import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    InputArea,
    LoginButton,
    LoginText,
    WelcomeText
} from './styles'
import InputCustom from "../../components/InputCustom";
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Api from "../../Api";


export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [registerField, setRegisterField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const clickSignUp = async () => {
        if (nameField != '' && registerField != '' && emailField != '' && passwordField != '') {
            const status = await Api.signUp(nameField, registerField, emailField, passwordField)
            if (status === 200) {
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
            {/* <WelcomeText>Cadastro</WelcomeText> */}

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

        </Container>
    );
}