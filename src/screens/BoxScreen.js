import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Child #1</Text>
      <Text style={styles.text2}>Child #2</Text>
      <Text style={styles.text3}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    height: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text1: {
    borderColor: "red",
    borderWidth: 5,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  text2: {
    borderColor: "green",
    borderWidth: 5,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 70,
  },
  text3: {
    borderColor: "red",
    borderWidth: 5,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
