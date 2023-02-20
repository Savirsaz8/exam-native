import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import NoteCard from "./NoteCard";

function BoardCard(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}
    >
      <View style={styles.bodyContent}>
        <Text style={styles.titleBoards}>{props.title}</Text>
        <Text style={styles.subtitleStyle}></Text>
      </View>
    </TouchableOpacity>
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
    height: 58
  },
  titleBoards: {
    fontSize: 24,
    color: "#000",
    height: 54,
    padding: 0,
    marginTop: 50,
    paddingTop: 0
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  scrollArea: {
    top: 67,
    left: 14,
    width: 330,
    height: 228,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 228,
    width: 330
  },
  materialCardWithImageAndTitle2: {
    height: 109,
    width: 330,
    borderRadius: 15
  },
  materialCardWithImageAndTitle3: {
    height: 109,
    width: 330,
    borderRadius: 15,
    marginTop: 10
  }
});

export default BoardCard;
