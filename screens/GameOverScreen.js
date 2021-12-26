import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import DefaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";
import { Colors } from "react-native/Libraries/NewAppScreen";

import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultsContainer: {
    width: "75%",
    marginVertical: Dimensions.get("window").height / 60,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  textAlignContainer: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
