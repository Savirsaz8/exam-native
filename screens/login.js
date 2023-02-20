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
    Image,
    Dimensions
} from 'react-native';
import {auth} from '../database/firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import Email from "../components/Email";
import Password from "../components/Password";
import Loginbtn from "../components/Loginbtn";
import Clicktosignup from "../components/Clicktosignup";
import Remember from "../components/Remember";
import Forgotpassword from "../components/Forgotpassword";

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      errorMessage: '',
      rememberMe: false,
      isRememberChecked: ''
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  toggleRememberMe = () => {
    var value = !this.state.rememberMe;
    this.setState({ rememberMe: value })
      if (value === true) {
        this.setState({ isRememberChecked: 'checked' })
    } else {
        this.setState({ isRememberChecked: '' })
    }
  }

  userLogin = () => {
    if(this.state.email === '' || this.state.password === '') {
      Alert.alert('','Lengkapi data terlebih dahulu')
      this.setState({isLoading: false});
    } else {
      this.setState({
        isLoading: true,
      })
      signInWithEmailAndPassword(auth,this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '',
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
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
            source={require("../assets/images/Gradient_xCTmx4q.png")}
          >
            <View style={styles.imageColumn}>
              <Image
                source={require("../assets/images/avatar1.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <View style={styles.grouping}>
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
              <Remember style={styles.materialCheckboxWithLabel1}
              onPress={() => this.toggleRememberMe()}
              checked={this.state.isRememberChecked}></Remember>
              <Forgotpassword
                style={styles.materialButtonWithVioletText2}
                onPress={() => this.props.navigation.navigate('Forgot')}
              ></Forgotpassword>
              <Loginbtn style={styles.materialButtonDark}
                onPress={() => this.userLogin()}
              ></Loginbtn>
              <Clicktosignup
                style={styles.materialButtonWithVioletText1}
                onPress={() => this.props.navigation.navigate('Signup')}
              ></Clicktosignup>
            </View>
            <View style={styles.imageColumnFiller}></View>
            </View>
          </ImageBackground>
        </View>
      );
  }
}
const windowWidth = Dimensions.get('window').width;
const is_mobile = windowWidth/30>20?false:true;
const grid = windowWidth/30>20?(1/42):(1/12);
const windowHeight = Dimensions.get('window').height;
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
    image: {
      width: 128,
      height: 122,
      marginLeft: is_mobile?windowWidth * 0.25:windowWidth * 0.714,
      alignSelf: "center"
    },
    group: {
      width: 299,
      height: 43,
      backgroundColor: "rgba(230, 230, 230,1)",
      justifyContent: "center",
      marginTop: 37,
      marginLeft: is_mobile?windowWidth * 0.165:windowWidth * 0.714,
      alignSelf: "center"
    },
    grouping: {
        width: 299,
        height: 43,
        alignSelf: "center"
   },
    materialIconTextbox1: {
      height: 43,
      width: 293,
      alignSelf: "center"
    },
    materialIconTextbox2: {
      height: 43,
      width: 299,
      backgroundColor: "rgba(230, 230, 230,1)",
      marginTop: 22,
      marginLeft: is_mobile?windowWidth * 0.165:windowWidth * 0.714,
      alignSelf: "center"
    },
    materialButtonDark: {
      height: 45,
      width: 135,
      marginTop: 115,
      marginLeft: is_mobile?windowWidth * 0.165:windowWidth * 0.714,
      alignSelf: "center"
    },
    materialButtonWithVioletText1: {
      height: 36,
      width: 259,
      marginTop: 14,
      marginLeft: is_mobile?windowWidth * 0.165:windowWidth * 0.714,
      alignSelf: "center"
    },
    imageColumn: {
      width: 299,
      marginTop: 122,
      marginLeft: 23
    },
    imageColumnFiller: {
      flex: 1
    },
    materialCheckboxWithLabel1: {
      height: 40,
      width: 143,
      marginLeft: is_mobile?windowWidth * 0.062:windowWidth * 0.357
    },
    materialButtonWithVioletText: {
      height: 0,
      width: 150,
      marginLeft: is_mobile?windowWidth * 0.5:windowWidth * 0.809
    },
    materialButtonWithVioletText2: {
          height: 0,
          width: 150,
          marginLeft: is_mobile?windowWidth * 0.5:windowWidth * 0.476
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