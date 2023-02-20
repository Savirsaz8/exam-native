import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Forgotpassword(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}
    >
      <Text style={styles.text}>Forgot Password?</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-italic",
    width: 152,
    height: 27,
    textAlign: "center"
  }
});

export default Forgotpassword;
