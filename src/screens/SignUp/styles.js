import react from "react";
import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ["#7FFFD4", "#E0FFFF"]
})`
    flex: 1;
`;

export const WelcomeText = styled.Text`
    font-size: 26px;
    color: rgba(0,0,0,0.8);
    font-weight: bold;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px 40px 0 40px;
    margin-top: 90px;
`;

export const LoginButton = styled.TouchableOpacity`
    height: 40px;
    background-color: #FFF;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    elevation: 2;
`;

export const LoginText = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;
`;
