import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from '../utils/FirebaseUtil';
export default  HomeScreen = () => {
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{signOut().then(err =>{console.log(err)});}}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})