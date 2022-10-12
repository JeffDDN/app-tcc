import react from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 25px;
    elevation: 1;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;

export default ({placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <FontAwesome5 name="user" size={24} color="black" />
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    );
}