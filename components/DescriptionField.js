import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function DescriptionField(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder=""
        dataDetector="all"
        placeholderTextColor="rgba(74,74,74,1)"
        style={styles.textInput}
        onChangeText={props.onChangeText}
        defaultValue={props.value}
      ></TextInput>
      <Text style={styles.text}>Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 150,
    width: 335,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    textAlign: "left",
    marginTop: 17
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    marginTop: -167
  }
});

export default DescriptionField;
