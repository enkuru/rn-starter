import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  const pages = [
    "Components",
    "List",
    "Image",
    "Color",
    "Square",
    "Text",
    "Box",
  ];

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <FlatList
        data={pages}
        keyExtractor={(page) => page}
        renderItem={({ item }) => {
          return (
            <View style={styles.button}>
              <Button onPress={() => navigate(item)} title={`Go to ${item}`} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    marginVertical: 2,
    marginHorizontal: 40,
  },
});

export default HomeScreen;
