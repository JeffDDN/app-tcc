import React from "react";
import { View, Button, Modal } from "react-native";
import styles from "./style";
import QrCode from "../QrCode";

export default () =>{
    const [modalVisible, setModalVisible] = React.useState(false)
    return(
        <View>
            <Modal 
                visible={modalVisible} 
                animationType="fade" 
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                   <QrCode/>
                   <Button title="Cancelar" onPress={() => setModalVisible(false) } />
                </View>
            </Modal>
            <View style={{marginTop:200, alignItems: "center",}}>
                <Button title="Abrir scanner" onPress={() => setModalVisible(true) } />
            </View>
        </View>
    );
}