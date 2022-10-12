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

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const SignInScreen = () =>{
        navigation.reset({
            routes: [{name:'SignUp'}]
        });
    }

    const LoginClick = () =>{
        navigation.navigate('Home');
    }

    return (
        <Container>
            {/* <WelcomeText>Seja bem vindo</WelcomeText> */}

            <Image style={{width:120, height:120, marginTop:30}} source={require('../../../assets/logo1.png')}/>

            <InputArea>
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

                <LoginButton onPress={LoginClick}>
                    <LoginText>Login</LoginText>
                </LoginButton>
            </InputArea>

            <SignUpTextArea>
                <SignUpText>Ainda não possui uma conta?</SignUpText>
                <SignUpButton onPress={SignInScreen}>
                    <SignUpButtonText>Cadastre-se</SignUpButtonText>
                </SignUpButton>
            </SignUpTextArea>
        </Container>
    );
}