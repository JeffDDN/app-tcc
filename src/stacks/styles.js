import styled from "styled-components/native";

export const ModalContainer = styled.SafeAreaView`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding-top: 100px;
    align-items: center;
`

export const ModalContent = styled.View`
    height: 320px;
    width: 270px;
    border-radius: 8px;
    background-color: #3e4144;
    elevation: 4;
    position: relative;
`

export const ModalHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
`

export const CloseArea = styled.View`
    width: 100%;
    padding: 15px 40px;
    position: absolute;
    bottom: 0;
`

export const CloseButton = styled.TouchableOpacity`
    width: 100%;
    height: 35px;
    border: 1px solid #FFF;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`

export const ModalMiddle = styled.View`
    margin-top: 15px;
    padding: 0 15px;
`

export const Fieldset = styled.View`
    border: 1px solid #FFF;
    width: 150px;
    border-radius: 6px;
    margin-top: ${props => props.margem ? props => props.margem : 0};
    position: relative;
    padding: 5px 5px 5px 10px;
`

export const FieldTitle = styled.Text`
    color: #FFF;
    background-color: #3e4144;
    font-size: 10px;
    position: absolute;
    transform: translateY(-8px) translateX(13px);
    padding: 0 3px;
`