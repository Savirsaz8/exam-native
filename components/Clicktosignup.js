import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Clicktosignup(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}
    >
      <Text style={styles.caption}>
        Don&#39;t have account? Click here to signup
      </Text>
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
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 14
  }
});

export default Clicktosignup;
