import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Clicktologin(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
        onPress={props.onPress}
    >
      <Text style={styles.caption}>
        Already Registered? Click here to login
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 14
  }
});

export default Clicktologin;
