import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
import CheckBtn from "../components/CheckBtn";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="menu" style={styles.leftIcon}></Icon>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            Note
          </Text>
        </View>
        <CheckBtn style={styles.save} onPress={props.onPress}></CheckBtn>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    height: 18,
    marginLeft: 45,
    marginTop: 14
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  leftIconButtonRow: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 303,
    marginLeft: 5,
    marginTop: 5
  },
  save: {
    height: 36,
    width: 36,
    marginTop: 2,
    marginLeft: windowWidth * 0.55
  },
});

export default Header;
