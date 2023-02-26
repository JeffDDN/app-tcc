import React from "react";
import { Text, Image } from "react-native";
import { Container, Header, User } from "./styles";
import Modal from "../../components/Modal";
import { FontAwesome } from '@expo/vector-icons';

export default () => {
    return (
        <Container>
            {/* <Header>
                <Image style={{ width: 30, height: 30 }} source={require('../../../assets/qr-code.png')} />
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Qr Presense</Text>
                <User>
                    <FontAwesome name="user-circle" size={30} color="rgba(0,0,0,0.6)" />
                </User>
            </Header> */}

            <Modal />
        </Container>
    );
}