import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is components screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
