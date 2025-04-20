import React from "react";
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  primary?: boolean;
}

export default function Button({ title, primary = true, ...props }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.button, primary ? styles.primaryButton : styles.secondaryButton]} 
      {...props}
    >
      <Text style={[styles.text, primary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#3b82f6",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "#3b82f6",
  },
});
