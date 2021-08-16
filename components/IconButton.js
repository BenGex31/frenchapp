/** @format */

import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const IconButton = ({ color, size, onPress, name, type, containerStyle }) => {
  return (
    <Pressable
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor: "transparent",
            },
            containerStyle,
          ];
        }

        return [styles.base, { opacity: 1, backgroundColor: "transparent" }];
      }}>
      <Button
        onPress={onPress}
        title={name}
        size={size}
        color={color}
        type={type}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
