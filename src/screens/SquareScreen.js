import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const incrementSize = 20;
const colors = [
  { color: "red", colorName: "Red" },
  { color: "green", colorName: "Green" },
  { color: "blue", colorName: "Blue" },
];

const changeColorValue = (colorValue, change) => {
  if (maxExceed(colorValue, change)) return 255;
  if (minExceed(colorValue, change)) return 0;

  return colorValue + change;
};

const maxExceed = (color, change) => color + change > 255 && change > 0;
const minExceed = (color, change) => color + change < 0 && change < 0;

const reducer = (state, action) => {
  const color = action.payload;

  switch (action.type) {
    case "increase_color":
      return {
        ...state,
        [color]: changeColorValue(state[color], incrementSize),
      };
    case "decrease_color":
      return {
        ...state,
        [color]: changeColorValue(state[color], -incrementSize),
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;

  return (
    <View>
      {colors.map(({ color, colorName }) => (
        <ColorCounter
          key={color}
          colorName={colorName}
          moreColor={() => dispatch({ type: "increase_color", payload: color })}
          lessColor={() => dispatch({ type: "decrease_color", payload: color })}
        />
      ))}

      <View
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
