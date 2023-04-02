import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 30px;
    padding: 0 15px;
    align-items: center;
    elevation: 1;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;

export default ({ placeholder, value, onChangeText, password, Icon, iconName, margin, type, passIcon }) => {

    const [passVisible, setPassVisible] = useState(password)

    return (
        <>
            <InputArea style={{ marginBottom: margin ? 25 : 0 }} >
                <Icon name={iconName} size={24} color="rgba(0,0,0,0.7)" />
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={passVisible}
                    keyboardType={
                        type === 'number' ? 'number-pad'
                            : type === 'email' ? 'email-address'
                                : 'default'
                    }
                />
                {
                    (passIcon) ?
                        (<TouchableOpacity onPress={() => setPassVisible(!passVisible)}>
                            <Feather name={passVisible ? "eye" : "eye-off"} size={22} color="rgba(0,0,0,0.5)" />
                        </TouchableOpacity>)
                        : ''

                }
            </InputArea>
        </>
    );
}