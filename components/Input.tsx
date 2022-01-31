import * as React from "react";
import { TextInput, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import ImagesFont from "./ImagesFont";

interface InputProps {
    setObjectValue: Function
}

const Input = (props: InputProps) => {
  let text: string = "";

  return (
    <View style={styles.viewInput}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el texto de su luna"
        placeholderTextColor={"gray"}
        onChangeText={(value) => (text = value)}
      />
      <TouchableOpacity style={styles.Button} onPress={() => props.setObjectValue(text)}>
        <Image
          source={ImagesFont.moonIcon}
          style={styles.moonIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  
    input: {
        fontSize: 16,
        textAlign: "center",
        marginRight: 10,
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 8,
        flex: 1,
        color: "white",
      },
      Button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        height: 50,
      },
      moonIcon: {
        height: 30,
      },
});
