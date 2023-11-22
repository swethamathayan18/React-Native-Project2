import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Result({ secretNum, term }) {
  let result;
  if (term) {
    if (term > secretNum) {
      result = "Higher!";
    } else if (term < secretNum) {
      result = "Lower";
    } else if (term == secretNum) {
      result = "Yey! Correct answer ";
    } else {
      result = "Enter valid Input";
    }
  }
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultMessage}>
        You Guessed: <Text style={{ color: "#ADD8E6" }}>{result}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 18,
  },
  resultMessage: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
