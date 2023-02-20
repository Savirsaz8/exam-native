import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Name(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="account" style={styles.iconStyle}></Icon>
      <TextInput placeholder="Fullname" style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 8
  },
  textInput: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
    width: 327,
    height: 43
  }
});

export default Name;
