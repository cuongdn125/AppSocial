import React, { useState } from 'react';
import { Text, View, ScrollView, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import {signIn, signUp} from '../utils/FirebaseUtil';
import auth from '@react-native-firebase/auth';

import { LoginManager, AccessToken } from 'react-native-fbsdk';

const {width, height} = Dimensions.get('window');

function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const logIn = () => {
        signIn(email, password).catch(err => {
            console.log(err);
            Alert.alert('SignIn error');
        });
    }
    const register = () => {
        signUp(email, password).catch(err => {
            console.log(err);
            Alert.alert('SignUp error');
        })
    }

    const onFacebookLogin = async () => {
        try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }
    
            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();
    
            if (!data) {
                throw 'Something went wrong obtaining access token';
            }
            console.log(data);
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
        }catch (err) {console.log(err)}
    }

    return (
        <View style={{flex: 1, backgroundColor: '#dfe0e3'}}> 
            <View style={{
                flex: 1,
                backgroundColor: '#7872e6',
                alignItems: 'center',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
            }}>
                <Image 
                    source={require('../assets/img/logo.png')}
                    resizeMode='contain'
                    style={{
                        height: 100,
                        width: 100,
                        marginTop: height/10,
                    }}
                />
            </View>
            <View style={{
                flex: 1,
                backgroundColor: '#dfe0e3'
            }}>

            </View>
            <View style={{
                position: 'absolute',
                left: width/16,
                right: width/16,
                bottom: height/15,
                height: height /1.5,
                backgroundColor: 'white',
                borderRadius: 20,
            }}>
                <Text style={styles.title}>Welcome</Text>
                <View style={styles.formInput}>
                    <Text style={styles.email}>Email</Text>
                    <View style={styles.action_input}>
                        <Image 
                            source={require('../assets/icon/user.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                marginHorizontal: 5
                            }}
                        />
                        <TextInput 
                            onChangeText={setEmail}
                            value={email}
                            placeholder='Your email'
                            style={styles.textInput}
                            autoCapitalize='none'
                        />
                    </View>
                    <Text style={styles.password}>Password</Text>
                    <View style={styles.action_input}>
                        <Image 
                            source={require('../assets/icon/password.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                marginHorizontal: 5
                            }}
                        />
                        <TextInput 
                            onChangeText={setPassword}
                            value={password}
                            placeholder='Your password'
                            style={styles.textInput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        marginTop: height/25,
                    }}>
                        <TouchableOpacity style={styles.signIn} onPress={() => logIn()}>
                            <Text style={{
                                color: 'white', 
                                fontSize: 18, 
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signUp} onPress={() => register()}>
                            <Text style={{
                                color: '#7872e6', 
                                fontSize: 18, 
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            textAlign: 'center'
                        }}>Or login with</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: height/30,
                            justifyContent: 'space-around'
                        }}>
                            <View style={{
                                height: width/6,
                                width: width/6,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={() => onFacebookLogin()}>
                                    <Image 
                                        source={require('../assets/icon/facebook.png')}
                                        resizeMode='contain'
                                        style={{
                                            height: width/6,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                height: width/6,
                                width: width/6,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/icon/google.png')}
                                        resizeMode='contain'
                                        style={{
                                            height: width/6,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                height: width/6,
                                width: width/6,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/icon/twitter.png')}
                                        resizeMode='contain'
                                        style={{
                                            height: width/6,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        color: '#4632A1',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: height/40,
    },
    formInput: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 15
    },
    action_input: {
        flexDirection: 'row',
        marginTop: height/60,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textInput: {
        flex: 1,
        padding: 10,
        borderLeftWidth: 1,
        borderColor: '#969da9'
    },
    password: {
        marginTop: height/60,
    },
    signIn: {
        backgroundColor: '#7872e6',
        width: width /1.5,
        height: height /20,
        justifyContent: 'center',
        borderRadius: 10
    },
    signUp: {
        backgroundColor: 'white',
        marginTop: height/50,
        borderWidth: 1,
        width: width /1.5,
        height: height /20,
        justifyContent: 'center',
        borderColor: '#7872e6',
        borderRadius: 10,
    }
})
export default Login;