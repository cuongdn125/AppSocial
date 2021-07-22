import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppStack from './navigation/AppStack';
import LoginProvider from './utils/LoginProvider';


export default App = () => {
  
    return (
        <LoginProvider>
          <AppStack/>
        </LoginProvider>
    );
}
