import React, { Component } from 'react';
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
import {auth} from '../database/firebase';
import {sendPasswordResetEmail} from "firebase/auth";
import Email from "../components/Email";
import Sendmailbtn from "../components/Sendmailbtn";

export default class Forgot extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      isLoading: false,
      errorMessage: ''
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userForgot = () => {
    if(this.state.email === '') {
      Alert.alert('','Lengkapi data terlebih dahulu')
      this.setState({isLoading: false});
    } else {
      this.setState({
        isLoading: true,
      })
      sendPasswordResetEmail(auth,this.state.email)
      .then((res) => {
        console.log(res)
        this.setState({
          isLoading: false,
          email: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => {
        Alert.alert('',error.message);
        this.setState({ isLoading: false, errorMessage: error.message })
      })
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
            resizeMode = 'cover'
            source={require("../assets/images/Gradient_xCTmx4q.png")}
        >
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <View style={styles.group}>
            <Email
                style={styles.materialIconTextbox1}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
            ></Email>
        </View>
        <Sendmailbtn
            style={styles.materialButtonDark2}
            onPress={() => this.userForgot()}
        ></Sendmailbtn>
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
    height: windowHeight,
    marginTop: 24,
    width: windowWidth
  },
  rect_imageStyle: {},
  forgotPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(253,253,253,1)",
    fontSize: 30,
    marginTop: 131,
    marginLeft:is_mobile?windowWidth * 0.25:windowWidth * 0.38
  },
  group: {
    width: 299,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    marginTop: 48,
    marginLeft: is_mobile?windowWidth * 0.125:windowWidth * 0.357
  },
  materialIconTextbox1: {
    height: 43,
    width: 293
  },
  materialButtonDark2: {
    height: 45,
    width: 135,
    marginTop: 43,
    marginLeft: is_mobile?windowWidth * 0.325:windowWidth * 0.42
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
