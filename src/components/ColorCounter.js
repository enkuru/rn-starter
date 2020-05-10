import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class ColorCounter extends Component {
  render() {
    const { colorName, moreColor, lessColor } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{colorName}</Text>
        <View style={styles.button}>
          <Button title={`More ${colorName}`} onPress={moreColor} />
        </View>
        <View style={styles.button}>
          <Button title={`Less ${colorName}`} onPress={lessColor} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  text: { fontSize: 25, textAlign: "center" },
  button: { marginVertical: 1, marginHorizontal: 40 },
});
