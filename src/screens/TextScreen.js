import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [input, setInput] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        value={input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setInput(text)}
      />
      <Text style={styles.text}>This is input: {input}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#bbb9b9",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
