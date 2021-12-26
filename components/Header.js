import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: { backgroundColor: "white" },
  headerAndroid: { backgroundColor: "grey" },
  headerTitle: {
    color: Platform.OS === "android" ? "black" : Colors.primary,
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
