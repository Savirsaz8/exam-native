import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, ActivityIndicator, FlatList, SafeAreaView, Text, Alert } from "react-native";
import Header from "../components/Header";
import BoardCard from "../components/BoardCard";
import ShareBtn from "../components/ShareBtn";
import ModalBoard from "../components/ModalBoard";
import {db, auth} from '../database/firebase';
import { collection, getDocs, getCountFromServer, doc, setDoc } from "firebase/firestore";

export default class Boards extends Component {
  constructor() {
    super();
    this.state = {
        isLoading: true,
        errorMessage: '',
        isShowModal: false,
        data:[],
        newBoard:{
            title:""
        }
    }
    this.onGetBoards()
  }

    componentDidMount() {
     this.onFocusSubscribe = this.props.navigation.addListener('focus', () => {
        this.onGetBoards()
     });
  }

  componentWillUnmount() {
     this.onFocusSubscribe();
  }

  updateInputVal = (val, prop) => {
    const current = this.state.newBoard;
    current[prop] = val;
    this.setState(current);
  }

  onGetBoards = async () => {
      try {
        const coll = collection(db, "boards");
        const querySnapshot = await getDocs(coll);
        const count = await getCountFromServer(coll);
        this.setState({
            data: []
        })
        let i = 0;
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().title}`);
          console.log(count.data().count);
          let current = {id:doc.id,title:doc.data().title}
          this.state.data.push(current);
          ++i;
          if(i==count.data().count){
            console.log(this.state.data)
            this.setState({
                isLoading: false
            })
          }
        });
      } catch (error) {
        Alert.alert('',error.message);
        this.setState({ isLoading: false, errorMessage: error.message })
      }
  };

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
                  "board-"+uniqueId
              );
              const add = await setDoc(docRef, this.state.newBoard)
              this.setState({
                  isLoading: false,
                  isShowModal: false,
                  data:{}
              })
              this.onGetBoards()
          } catch (error) {
              Alert.alert('',error.message);
              this.setState({ isLoading: false, errorMessage: error.message })
          }
        }
      }

  showModal = () => {
    this.setState({
        isShowModal: true
    })
  }

  hideModal = () => {
      this.setState({
          isShowModal: false
      })
  }

  render() {
    if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }
     console.log()
    return (
        <View style={styles.container}>
          <Header style={styles.materialHeader2} title="Boards"></Header>
          <View style={styles.scrollArea}>
          <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={this.state.data}
                renderItem={({item}) =>
                    <BoardCard style={styles.materialCardWithoutImage}
                        title={item.title.toString()}
                        onPress={() => this.props.navigation.navigate('Notes',{id:item.id,title:item.title})}
                    ></BoardCard>}
              />
          </SafeAreaView>
          </View>
          <ShareBtn style={styles.materialButtonShare}
          onPress={() => this.showModal()}
          ></ShareBtn>
          <ModalBoard style={[styles.materialCardWithoutImage2, this.state.isShowModal?"":styles.hide]}
          onChangeText={(val) => this.updateInputVal(val, 'title')}
          onPressInput={() => this.submit()}
          ></ModalBoard>
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
    height: windowHeight,
    width: 353
  },
  materialCardWithoutImage: {
    height: 80,
    width: 353,
    borderRadius: 30,
    marginTop: 10,
    overflow: "scroll"
  },
  materialButtonShare: {
    height: 56,
    width: 56,
    marginTop: windowHeight * 0.825,
    marginLeft: windowWidth * 0.75,
    position: 'absolute'
  },
  materialCardWithoutImage2: {
    height: 142,
    width: 306,
    marginTop: windowHeight * 0.425,
    alignSelf: "center",
    position: 'absolute'
  },
  hide: {
      display: "none"
  },
  title: {
      fontSize: 24,
      color: "#000",
      height: 54,
      padding: 0,
      marginTop: 50,
      paddingTop: 0
    },
});