import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ["#7FFFD4", "#E0FFFF"]
})`
    flex: 1;
`;

export const ImageArea = styled.View`
    align-items: center;
    margin-top: 120px;
`

export const InputArea = styled.View`
    width: 100%;
    padding: 40px 40px 10px 40px;
    margin-top: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
    height: 40px;
    background-color: #FFF;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 55px;
    elevation:2;
`;

export const LoginText = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;
`;

export const SignUpTextArea = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 110px;
`;

export const SignUpText = styled.Text`
    font-size: 16px;
    color: #000;
`;

export const SignUpButton = styled.TouchableOpacity`
    margin-left: 5px;
`;

export const SignUpButtonText = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
`;