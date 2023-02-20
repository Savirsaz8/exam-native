import React, { Component } from 'react';
import {auth} from '../database/firebase';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    ActivityIndicator,
    ImageBackground,
    Dimensions
} from 'react-native';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import Name from "../components/Name";
import Email from "../components/Email";
import Password from "../components/Password";
import Signupbtn from "../components/Signupbtn";
import Clicktologin from "../components/Clicktologin";

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      isLoading: false,
      errorMessage: ''
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  registerUser = () => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (!((this.state.password).match(check))) {
        Alert.alert('','Password yang dibuat merupakan kombinasi huruf besar, huruf kecil, angka, dan symbol dan harus memiliki panjang minimal sebanyak 8 karakter')
        this.setState({isLoading: false})
    }else{
        if(this.state.displayName === '' || this.state.email === '' || this.state.password === '') {
          Alert.alert('','Lengkapi data terlebih dahulu')
          this.setState({isLoading: false});
        } else {
          this.setState({
            isLoading: true,
          })
          createUserWithEmailAndPassword(auth,this.state.email, this.state.password)
          .then((res) => {
            updateProfile(auth.currentUser, {
              displayName: this.state.displayName
            }).then(() => {}).catch(error => this.setState({ errorMessage: error.message }));
            console.log('User registered successfully!')
            this.setState({
                isLoading: false,
                displayName: '',
                email: '',
                password: '',
                errorMessage: ''
            })
            this.props.navigation.navigate('Login')
          })
          .catch(error => {
            Alert.alert('',error.message);
            this.setState({ isLoading: false, errorMessage: error.message })
          })
        }
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
        <View style={styles.container}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_xCTmx4q.png")}
          >
            <Text style={styles.text}>Signup</Text>
            <Name style={styles.materialIconTextbox3}
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, 'displayName')}
            ></Name>
            <View style={styles.group}>
              <Email style={styles.materialIconTextbox1}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
              ></Email>
            </View>
            <Password style={styles.materialIconTextbox2}
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15}
                secureTextEntry={true}
            ></Password>
            <Signupbtn style={styles.materialButtonDark1}
            onPress={() => this.registerUser()}
            ></Signupbtn>
            <Clicktologin
              style={styles.materialButtonWithVioletText2}
              onPress={() => this.props.navigation.navigate('Login')}>
            ></Clicktologin>
          </ImageBackground>
        </View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const is_mobile = windowWidth/30>20?false:true;
const grid = windowWidth/30>20?(1/42):(1/12);
const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    rect: {
      width: windowWidth,
      height: windowHeight,
      marginTop: 24,
      alignSelf: "center"
    },
    rect_imageStyle: {},
    text: {
      fontFamily: "roboto-regular",
      color: "rgba(253,253,253,1)",
      fontSize: 30,
      marginTop: 125,
      marginLeft: is_mobile?windowWidth * 0.375:windowWidth * 0.42
    },
    materialIconTextbox3: {
      height: 43,
      width: 299,
      backgroundColor: "rgba(230, 230, 230,1)",
      marginTop: 55,
      marginLeft: is_mobile?windowWidth * 0.125:windowWidth * 0.357
    },
    group: {
      width: 299,
      height: 43,
      backgroundColor: "rgba(230, 230, 230,1)",
      justifyContent: "center",
      marginTop: 22,
      marginLeft: is_mobile?windowWidth * 0.125:windowWidth * 0.357
    },
    materialIconTextbox1: {
      height: 43,
      width: 293
    },
    materialIconTextbox2: {
      height: 43,
      width: 299,
      backgroundColor: "rgba(230, 230, 230,1)",
      marginTop: 22,
      marginLeft: is_mobile?windowWidth * 0.125:windowWidth * 0.357
    },
    materialButtonDark1: {
      height: 45,
      width: 135,
      marginTop: 79,
      marginLeft:is_mobile?windowWidth * 0.325:windowWidth * 0.42
    },
    materialButtonWithVioletText2: {
      height: 36,
      width: 253,
      marginLeft: is_mobile?windowWidth * 0.18:windowWidth * 0.38
    },
    preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});