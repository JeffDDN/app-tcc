import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ["#7FFFD4", "#E0FFFF"]
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 90px;
`;