import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Result from "./result";

const secretNum = Math.floor(Math.random() * 10) + 1;

export default function App() {
  const [term, setTerm] = useState("");

  const handlechange = (text) => {
    setTerm(text);
  };
  return (
    <ImageBackground
      source={require("./assets/tree.jpg")}
      style={styles.container}
    >
      <View style={styles.boxContainer}>
        <TextInput style={styles.headContent}>
          Guess the number between 1-10
        </TextInput>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder=""
            onChangeText={handlechange}
          />
        </View>
        <View>
          <Result secretNum={secretNum} term={term} />
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  boxContainer: {
    backgroundColor: "#CD5C5C",
    width: 390,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 16,
    height: 200,
    flexDirection: "column",
    alignItems: "center",
  },
  headContent: {
    color: "white",
    fontSize: 20,
    marginTop: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: 300,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  textInputContainer: {
    marginTop: 20,
  },
});
