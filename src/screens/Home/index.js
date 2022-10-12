import react from "react";
import { Container } from "./styles";
import Title from '../../components/Title';
import Modal from "../../components/Modal";

export default () => {
    return (
        <Container>
            <Title/>
            <Modal/>
        </Container>
    );
}