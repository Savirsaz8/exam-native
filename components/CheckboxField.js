import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CheckboxField(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}
    >
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <TextInput
        placeholder="Checkbox"
        dataDetector="all"
        style={styles.textInput}
        onChangeText={props.onChangeText}
        defaultValue={props.value}
      ></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 20,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  checkIcon: {
    color: "#3F51B5",
    fontSize: 28,
    lineHeight: 28
  },
  textInput: {
    marginLeft: 2,
    fontSize: 16,
    color: "rgba(0,0,0,0.87)",
    width: 201,
    height: 19
  }
});

export default CheckboxField;
