import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CheckboxField from "./CheckboxField";
import MinBtn from "./MinBtn";

function CheckLists(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialCheckboxWithLabelRow}>
        <CheckboxField style={styles.materialCheckboxWithLabel}
        checked={props.checked}
        onPress={props.onPress}
        value={props.value}
        onChangeText={props.onChangeText}
        ></CheckboxField>
        <MinBtn style={styles.materialButtonTransparentHamburger1}></MinBtn>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialCheckboxWithLabel: {
    height: 40,
    width: 289
  },
  materialButtonTransparentHamburger1: {
    height: 36,
    width: 36,
    marginTop: 2
  },
  materialCheckboxWithLabelRow: {
    height: 40,
    flexDirection: "row",
    flex: 1
  }
});

export default CheckLists;
