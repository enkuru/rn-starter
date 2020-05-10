import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    { title: "Forest", image: require("../../assets/forest.jpg") },
    { title: "Beach", image: require("../../assets/beach.jpg") },
    { title: "Mountain", image: require("../../assets/mountain.jpg") },
  ];

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => {
          return (
            <View style={styles.image}>
              <ImageDetail title={item.title} image={item.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({ image: {} });

export default ImageScreen;
