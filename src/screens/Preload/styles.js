import react from "react";
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ["#7FFFD4", "#E0FFFF"]
})`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 90px;
`;