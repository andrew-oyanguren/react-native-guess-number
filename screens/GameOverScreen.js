import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";
import { Colors } from "react-native/Libraries/NewAppScreen";

import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.resultsContainer}>
        <BodyText style={styles.textAlignContainer}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onStartOver}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultsContainer: {
    width: "75%",
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  textAlignContainer: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
