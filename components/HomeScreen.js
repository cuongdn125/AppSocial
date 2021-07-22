import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from '../utils/FirebaseUtil';
import { LoginContext } from '../utils/LoginProvider';
export default  HomeScreen = () => {
    const {user} = useContext(LoginContext);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{signOut().then(err =>{console.log(err)});}}>
          <Text>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{console.log(user)}}>
          <Text>dkladl</Text>
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