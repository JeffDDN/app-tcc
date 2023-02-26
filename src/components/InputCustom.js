import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    elevation: 1;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;

export default ({ placeholder, value, onChangeText, password, Icon, iconName, margin }) => {
    return (
        <>
            {
                (margin) ?
                    (<InputArea style={{ marginBottom: 25 }} >
                        <Icon name={iconName} size={24} color="black" />
                        <Input
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChangeText}
                            secureTextEntry={password}
                        />
                    </InputArea>)
                    :
                    (<InputArea>
                        <Icon name={iconName} size={24} color="black" />
                        <Input
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChangeText}
                            secureTextEntry={password}
                        />
                    </InputArea>)
            }
        </>
    );
}