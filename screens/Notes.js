import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, ActivityIndicator, FlatList, SafeAreaView, Alert } from "react-native";
import Header from "../components/Header";
import NotesCard from "../components/NotesCard";
import ShareBtn from "../components/ShareBtn";
import { useRoute } from '@react-navigation/native';
import {db, auth} from '../database/firebase';
import { collection, getDocs, doc, getDocFromCache } from "firebase/firestore";

export default class Notes extends Component {
  constructor(route,navigation) {
    super();
    this.state = {
        isLoading: false,
        errorMessage: '',
        idBoard: route.route.params.id,
        titleBoard: route.route.params.title,
        data:[]
    }
  }

  onGetNotes = async () => {
        this.setState({
            data: []
        })
        try {
          const querySnapshot = await getDocs(collection(db, "boards", this.state.idBoard, "notes"));
          this.setState({
              data: []
          })

          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().title}`);
            let current = {
                id:doc.id,
                title:doc.data().title,
                description:doc.data().description,
                due_date:doc.data().due_date,
                is_check:doc.data().is_check,
                label:doc.data().label,
                link:doc.data().link,
                title_check:doc.data().title_check
            }
             this.state.data.push(current);
          });
          this.setState({
            isLoading: false
          })
        } catch (error) {
          Alert.alert('',error.message);
          this.setState({ isLoading: false, errorMessage: error.message })
        }
    };

  componentDidMount() {
     this.onFocusSubscribe = this.props.navigation.addListener('focus', () => {
        this.onGetNotes()
     });
  }

  componentWillUnmount() {
     this.onFocusSubscribe();
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
          <Header style={styles.materialHeader2} title={this.state.titleBoard}></Header>
          <View style={styles.scrollArea}>
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={this.state.data}
                renderItem={({item}) =>
                    <NotesCard style={styles.materialCardWithImageAndTitle}
                    title={item.title}
                    description={item.description}
                    label={item.label}
                    title_check={item.title_check}
                    is_check={item.is_check}
                    due_date={item.due_date}
                    onPress={() => this.props.navigation.navigate('Note',{id:item.id,idBoard:this.state.idBoard})}
                    ></NotesCard>}
              />
            </SafeAreaView>
          </View>
          <ShareBtn style={styles.materialButtonShare}
          onPress={() => this.props.navigation.navigate('NoteAdd',{idBoard:this.state.idBoard})}
          ></ShareBtn>
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
  materialHeader2: {
    height: 56,
    width: windowWidth,
    marginTop: 23,
    alignSelf: "center"
  },
  scrollArea: {
    width: 353,
    height: windowHeight,
    marginTop: 20,
    marginLeft: windowWidth*0.0625,
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 694,
    width: 352
  },
  materialCardWithImageAndTitle: {
    height: 166,
    width: 352,
    borderRadius: 6,
    marginTop: 10,
    overflow: "visible"
  },
  materialButtonShare: {
      height: 56,
      width: 56,
      marginTop: windowHeight * 0.825,
      marginLeft: windowWidth * 0.75,
      position: 'absolute'
   }
});
