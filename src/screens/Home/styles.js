import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ["#7FFFD4", "#E0FFFF"]
})`
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    padding: 20px;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,0.1);
`

export const User = styled.TouchableOpacity``