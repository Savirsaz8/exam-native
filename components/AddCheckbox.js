import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import PlusBtn from "./PlusBtn";

function AddCheckbox(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.materialButtonTransparentHamburgerRow}>
        <PlusBtn style={styles.materialButtonTransparentHamburger}></PlusBtn>
        <Text style={styles.text}>Add Checkbox</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    marginTop: 10
  },
  materialButtonTransparentHamburgerRow: {
    height: 36,
    flexDirection: "row",
    flex: 1
  }
});

export default AddCheckbox;
