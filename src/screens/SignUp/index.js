import react, {useState} from "react";
import { Image } from "react-native";
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

import SignInputEmail from "../../components/SignInputEmail";
import SignInputSenha from "../../components/SignInputSenha";
import SignInputNome from "../../components/SignInputNome";
import SignInputMatricula from "../../components/SignInputMatricula";

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [registerField, setRegisterField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const SignUpScreen = () =>{
        navigation.reset({
            routes: [{name:'SignIn'}]
        });
    }

    return (
        <Container>
            <WelcomeText>Cadastre-se</WelcomeText>
            {/* <Image style={{width:120, height:120, marginTop:30}} source={require('../../../assets/logo1.png')}/> */}

            <InputArea>
                <SignInputNome 
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInputMatricula 
                    placeholder="Matrícula"
                    value={registerField}
                    onChangeText={t=>setRegisterField(t)}
                />

                <SignInputEmail 
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInputSenha
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <LoginButton>
                    <LoginText>Cadastrar</LoginText>
                </LoginButton>
            </InputArea>

            <SignUpTextArea>
                <SignUpText>Já possui uma conta?</SignUpText>
                <SignUpButton onPress={SignUpScreen}>
                    <SignUpButtonText>Login</SignUpButtonText>
                </SignUpButton>
            </SignUpTextArea>
        </Container>
    );
}