/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Picker, TouchableOpacity, Platform, StyleSheet, TextInput, Text, View, Image } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Info extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img/BG.png')} style={{ position: 'absolute', width: '100%', height: '100%' }} />
                {/* <Image source={require('./img/BG.svg')} style={{ position: 'absolute', width: '100%', height: '100%' }} /> */}
                <Image
                    source={require('./img/General.png')}
                />
                <Image
                    source={require('./img/Line 1.png')}
                >

                </Image>
                <Image

                    // style={{ width: 300, height: 200 }}
                    source={require('./img/Line 1.png')}
                />
                <Image
                    // style={{ width: 300, height: 200 }}
                    source={require('./img/Line 1.png')}
                />

                {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
                <TextInput
                    style={styles.textfield}
                    editable
                    borderColor="green"

                    // backgroundColor="white"
                    placeholder="First Name"
                    color="white"
                    borderColor="red"
                    borderRadius={15}
                    height={5 + '%'}
                    width={80 + '%'}
                    marginBottom={10 + '%'}
                />
                <TextInput
                    style={styles.textfield}
                    editable
                    color="white"

                    borderColor="green"
                    // backgroundColor="white"
                    placeholder="Last Name"
                    // borderRadius={15}
                    height={5 + '%'}
                    width={80 + '%'}
                    marginBottom={10 + '%'}
                />
                {/* <Picker
                    // selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ language: itemValue })
                    // }
                    >
                    <Picker.Item label="Gender" value="gender" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Picker
                    // selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ language: itemValue })
                    // }
                    > */}
                {/* <Picker.Item label="18" value="java" />
                    <Picker.Item label="19" value="js" />
                    <Picker.Item label="20" value="js" />
                    <Picker.Item label="21" value="js" />
                    <Picker.Item label="22" value="js" />
                    <Picker.Item label="23" value="js" />
                    <Picker.Item label="24" value="js" />
                    <Picker.Item label="25" value="js" />
                    <Picker.Item label="26" value="js" />
                    <Picker.Item label="27" value="js" />
                    <Picker.Item label="28" value="js" />
                    <Picker.Item label="29" value="js" />
                    <Picker.Item label="30" value="js" />
                    <Picker.Item label="31" value="js" />
                    <Picker.Item label="32" value="js" />
                    <Picker.Item label="33" value="js" />
                </Picker> */}

                {/* <TextInput
                    style={styles.textfield}
                    editable
                    backgroundColor="white"
                    // borderRadius={15}
                    placeholder="Password"
                    height={5 + '%'}
                    width={80 + '%'}
                    marginBottom={10 + '%'} 

                />*/}
                {/* <Button color="#841584" title="Login"></Button>
        <Button color="#841584" title="Sign Up"></Button> */}
                {/* <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={() => this.props.navigation.navigate('screen4')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    style={styles.signupScreenButton}
                    // onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('vehicle')}
                >
                    <Image
                        // style={{ width: 300, height: 200 }}
                        source={require('./img/save-changes.png')}
                    />
                </TouchableOpacity>
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
        borderRadius: 15,
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
