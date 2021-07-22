import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default  LoadingScreen = () => {
  
    return (
      <View style={styles.container}>
          <ActivityIndicator color="#000" size='large'/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})