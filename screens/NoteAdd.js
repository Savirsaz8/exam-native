import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, ActivityIndicator, Alert } from "react-native";
import Header2 from "../components/Header2";
import TitleField from "../components/TitleField";
import DescriptionField from "../components/DescriptionField";
import CheckLists from "../components/CheckLists";
import CheckboxField from "../components/CheckboxField";
import MinBtn from "../components/MinBtn";
import AddCheckbox from "../components/AddCheckbox";
import DueDateField from "../components/DueDateField";
import LinkField from "../components/LinkField";
import LabelField from "../components/LabelField";
import {db, auth} from '../database/firebase';
import { collection, getDoc, doc, getDocFromCache, setDoc } from "firebase/firestore";
import { CommonActions } from '@react-navigation/native';

export default class NoteAdd extends Component {
  constructor(route,navigation) {
    super();
    this.state = {
        isLoading: false,
        errorMessage: '',
        isChecked: false,
        idBoard: route.route.params.idBoard,
        data:{
            description:"",
            due_date:"",
            is_check:false,
            label:"",
            link:"",
            title:"",
            title_check:""
        }
    }
  }

  submit = async () => {
      if(this.state.title === '') {
        Alert.alert('','Title harus diisi')
        this.setState({isLoading: false});
      } else {
        try{
            this.setState({
                isLoading: true,
            })
            const uniqueId = parseInt(Date.now() * Math.random()).toString();
            const docRef = doc(
                db,
                "boards",
                this.state.idBoard,
                "notes",
                "note-"+uniqueId
            );
            const add = await setDoc(docRef, this.state.data)
            this.setState({
                isLoading: false,
                data:{}
            })
            this.props.navigation.navigate('Notes',{id:this.state.idBoard})
        } catch (error) {
            Alert.alert('',error.message);
            this.setState({ isLoading: false, errorMessage: error.message })
        }
      }
    }

  toggleChecked = () => {
      var value = !this.state.isChecked;
      const current = this.state.data;
      current.is_check = value;
      this.setState({ isChecked: value, data: current  })
  }

  updateInputVal = (val, prop) => {
      const current = this.state.data;
      current[prop] = val;
      this.setState(current);
      console.log(this.state.data)
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
          <View style={styles.materialHeader21Stack}>
            <Header2 style={styles.materialHeader21}
            onPress={() => this.submit()}
            ></Header2>
          </View>
          <View style={styles.form}>
            <TitleField style={styles.materialStackedLabelTextbox}
            value={this.state.data.title}
            onChangeText={(val) => this.updateInputVal(val, 'title')}
            ></TitleField>
            <DescriptionField style={styles.description}
            value={this.state.data.description}
            onChangeText={(val) => this.updateInputVal(val, 'description')}
            ></DescriptionField>
            <View style={styles.scrollArea}>
                <CheckLists
                style={styles.checkLists}
                checked={this.state.isChecked?"checked":""}
                value={this.state.data.title_check}
                onChangeText={(val) => this.updateInputVal(val, 'title_check')}
                onPress={() => this.toggleChecked()}></CheckLists>
            </View>
            <DueDateField style={styles.materialIconTextbox1}
            value={this.state.data.due_date}
            onChangeText={(val) => this.updateInputVal(val, 'due_date')}
            ></DueDateField>
            <LinkField style={styles.materialIconTextbox1}
            value={this.state.data.link}
            onChangeText={(val) => this.updateInputVal(val, 'link')}
            ></LinkField>
            <LabelField style={styles.materialIconTextbox1}
            value={this.state.data.label}
            onChangeText={(val) => this.updateInputVal(val, 'label')}
            ></LabelField>
          </View>
        </View>
      );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader21: {
    height: 56,
    width: windowWidth,
    marginTop: 23,
    alignSelf: "center"
  },
  materialButtonTransparentHamburger3: {
    height: 36,
    width: 36,
    marginTop: 2
  },
  materialHeader21Stack: {
    height: 56,
    width: windowWidth,
  },
  form: {
    width: windowWidth,
    height: windowHeight,
    marginTop: 13,
    marginLeft: windowWidth * 0.06
  },
  materialStackedLabelTextbox: {
    height: 60,
    width: 335
  },
  description: {
    height: 167,
    width: 335,
    marginTop: 9
  },
  scrollArea: {
    width: 325,
    height: 30,
    marginLeft: 5
  },
  scrollArea_contentContainerStyle: {
//    height: 160,
    height: 30,
    width: 325
  },
  checkLists: {
    height: 40,
    width: 325
  },
  group4: {
    width: 325,
    height: 40,
    flexDirection: "row"
  },
  materialCheckboxWithLabel2: {
    height: 40,
    width: 289
  },
  materialCheckboxWithLabel2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  group6: {
    width: 325,
    height: 40,
    flexDirection: "row"
  },
  materialCheckboxWithLabel4: {
    height: 40,
    width: 289
  },
  materialButtonTransparentHamburger5: {
    height: 36,
    width: 36,
    marginTop: 2
  },
  materialCheckboxWithLabel4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  group5: {
    width: 325,
    height: 40,
    flexDirection: "row"
  },
  materialCheckboxWithLabel3: {
    height: 40,
    width: 289
  },
  materialButtonTransparentHamburger4: {
    height: 36,
    width: 36,
    marginTop: 2
  },
  materialCheckboxWithLabel3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  addCheckbox: {
    height: 36,
    width: 126,
    marginTop: 13,
    marginLeft: 5
  },
  materialIconTextbox1: {
    height: 43,
    width: 322,
    marginTop: 11
  }
});