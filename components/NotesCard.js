import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function NotesCard(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}
    >
      <View style={styles.cardBody}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.subtitleStyle}>{props.description}</Text>
        <Image
          source={require("../assets/images/cardImage.png")}
          style={styles.cardItemImagePlace}
        ></Image>
         <Text style={styles.dueDate}>{props.due_date}</Text>
         <View style={styles.group}>
            <View style={styles.ellipseRow}>
                <Text style={styles.loremIpsum2}>{props.label}</Text>
                <Text style={styles.loremIpsum}>
                {props.title_check? props.title_check+" is "+(props.is_check?"Done":"Not Done"):""}</Text>
            </View>
         </View>
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
  dueDate: {
    top: 100,
    left: 258,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    width: 88,
    height: 14
  },
  group: {
    top: 124,
    left: 21,
    width: 300,
    height: 17,
    position: "absolute",
    flexDirection: "row"
  },
  ellipse: {
    width: 17,
    height: 17
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    marginLeft: 6
  },
  loremIpsum2: {
      fontFamily: "roboto-regular",
      color: "#000",
      marginLeft: 6,
      fontSize: 14,
      fontWeight: "bold"
  },
  ellipseRow: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    width: 357,
    top: 0,
    height: 0
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    top: 10,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    height: 50
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
    top: 50,
    left: 10,
    height: 50,
    width: 220
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16
  }
});

export default NotesCard;
