import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomNumber = (i) => Math.floor(Math.random() * i);
  const randomRgb = () =>
    `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;

  return (
    <View>
      <Button
        onPress={() => setColors([...colors, randomRgb()])}
        title="Add random color"
      />

      <FlatList
        data={colors}
        keyExtractor={(c) => c}
        renderItem={({ item }) => <View style={{ height: 100, width: 100, backgroundColor: item }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
