import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Remember(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}
    >
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.rememberMe}>{props.rememberMe || "Remember me"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  checkIcon: {
    color: "#3F51B5",
    fontSize: 19,
    lineHeight: 28
  },
  rememberMe: {
    marginLeft: 2,
    fontSize: 14,
    color: "rgba(249,249,249,0.87)",
    width: 113,
    lineHeight: 14
  }
});

export default Remember;
