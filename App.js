import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Loading from './Loading'
import Login from './Login';
import Route from './Route';
import Info from './Info'
import Vehicle from './Vehicle'
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';


const RootStack = createStackNavigator({
    // home: HomeScreen,
    // app: App,
    loading: Loading,
    login: Login,
    route: Route,
    info: Info,
    vehicle: Vehicle
});

const App = createAppContainer(RootStack);
{/* <ImageBackground source={require('./img/loading.png')} style={{ position: 'absolute', width: '100%', height: '100%' }} /> */}

export default App;
// import {
//     Login, Camera, Profile, Register
// } from './src/components/screens';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//         <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>Go To App</TouchableOpacity>
//       </View>
//     );
//   }
// }
// // const IntroStack = createStackNavigator({
// //     // Login,
// //     // Register, 
// // });

// // const Tabs = createBottomTabNavigator({
// //     feed: App,
// //     // camera: Camera,
// //     // profile: Profile
// // });

// // // const AppNavigator = createSwitchNavigator({
// // //     Tabs,
// // //     Intro: IntroStack
// // // }, {
// // //     initialRouteName: "Intro"
// // // });


