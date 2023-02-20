import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialButtonViolet from "./MaterialButtonViolet";

function ModalBoard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <TextInput
          placeholder="Title goes here"
          style={styles.textInput}
          onChangeText={props.onChangeText}
        ></TextInput>
      </View>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
          onPress={props.onPressInput}
        ></MaterialButtonViolet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    width: 357,
    top: -1,
    height: 78,
    left: 1
  },
  textInput: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
    width: 323,
    height: 41
  },
  materialButtonViolet: {
    height: 36,
    width: 100,
    position: "absolute",
    top: 87,
    alignSelf: "center"
  }
});

export default ModalBoard;
