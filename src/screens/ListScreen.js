import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default ListScreen = () => {
  const friends = [
    { id: 1, age: 15, name: "Friend #1" },
    { id: 2, age: 25, name: "Friend #2" },
    { id: 3, age: 18, name: "Friend #3" },
    { id: 4, age: 17, name: "Friend #4" },
    { id: 5, age: 16, name: "Friend #5" },
    { id: 6, age: 19, name: "Friend #6" },
    { id: 7, age: 25, name: "Friend #7" },
    { id: 8, age: 23, name: "Friend #8" },
    { id: 9, age: 30, name: "Friend #9" },
  ];

  return (
    <View>
      <FlatList
        //horizontal
        //showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={friends}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <Text style={styles.friend}>
              {item.name} : {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  friend: {
    marginVertical: 50,
  },
});
