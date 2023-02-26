import react from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default () => {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>QR Code Presense</Text>
        </View>
    );
}