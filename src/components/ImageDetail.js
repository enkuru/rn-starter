import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "gray",
  },
});

export default ImageDetail;
