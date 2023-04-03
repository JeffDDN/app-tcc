import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import AuthProvider from './src/contexts/AuthContext';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
}

