/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Platform, StyleSheet, TextInput, Text, View, Image } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img/loading.png')} style={{ position: 'absolute', width: '100%', height: '100%' }} />
                {/* <Image source={require('./img/BG.svg')} style={{ position: 'absolute', width: '100%', height: '100%' }} /> */}
                {/* <Image
                    style={{ width: 300, height: 200 }}
                    source={require('./img/logo.png')}
                /> */}
                {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
                {/* <TextInput
                    style={styles.textfield}
                    editable
                    backgroundColor="white"
                    placeholder="Username"
                    // borderRadius={15}
                    height={5 + '%'}
                    width={80 + '%'}
                    marginBottom={10 + '%'}
                />
                <TextInput
                    style={styles.textfield}
                    editable
                    backgroundColor="white"
                    // borderRadius={15}
                    placeholder="Password"
                    height={5 + '%'}
                    width={80 + '%'}
                    marginBottom={10 + '%'} */}

                {/* // padding={}
                /> */}
                {/* <TouchableOpacity style={styles.underline} ><Text color="white">Forgot Username/Password?</Text></TouchableOpacity> */}
                {/* <Button color="#841584" title="Login"></Button>
        <Button color="#841584" title="Sign Up"></Button> */}
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={() => this.props.navigation.navigate('login')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Start</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.signupScreenButton}
                    // onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginScreenButton: {

        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#5F8318',
        borderRadius: 360,
        borderWidth: 1,
        // borderColor: '#fff'
    },
    signupScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#01171B',
        borderRadius: 15,
        borderWidth: 1,
        // borderColor: '#fff'
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    underline: {
        textDecorationLine: 'underline',
        color: 'white',
        paddingBottom: 30,
    },
    textfield: {
        fontSize: 20,
        // height: 10,
        // width: 100 + "%",
        // marginHorizontal: 50,
        // backgroundColor: "rgb(255,255,255)",
        // marginBottom: 10,
        // paddingBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
