import styled from "styled-components/native";

export const ModalContainer = styled.SafeAreaView`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding-top: 100px;
    align-items: center;
`

export const ModalContent = styled.View`
    height: 300px;
    width: 270px;
    border-radius: 8px;
    background-color: #3e4144;
    justify-content: space-between;
    elevation: 4;
`

export const ModalHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    padding: 10px 15px;
    /* border: 1px solid red; */
`

export const InfoArea = styled.View`
    /* border: 1px solid blue; */
`

export const CloseArea = styled.View`
    width: 100%;
    padding: 15px 40px;
`

export const CloseButton = styled.TouchableOpacity`
    width: 100%;
    height: 35px;
    border: 1px solid #FFF;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`