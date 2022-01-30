import { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import ImagesFonts from "./components/ImagesFont";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Heigth = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

interface historia {
  moonText: Array<string>;
}

export default function App() {
  const [historial, setHistorial] = useState<historia>({
    moonText: [],
  });
  let text: string = "";

  const getMyObject = async () => {
    try {
      let jsonValue: string | null;
      jsonValue = await AsyncStorage.getItem("@historial");
      setHistorial(
        jsonValue != null
          ? JSON.parse(jsonValue)
          : {
              moonText: [],
            }
      );
    } catch (e) {
      // read error
    }
  };

  const setObjectValue = async () => {
    if (text != "") {
      historial.moonText.push(text);
      try {
        const jsonValue: string = JSON.stringify(historial);
        await AsyncStorage.setItem("@historial", jsonValue);
      } catch (e) {
        // save error
      }
    }

    getMyObject();
  };

  useEffect(() => {
    getMyObject();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={"#1D1D1D"} />
        <Text style={styles.title}>You Make A Moon</Text>
        <Image
          source={ImagesFonts.Moon1}
          style={styles.viewImage}
          resizeMode="contain"
        />
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el texto de su luna"
            placeholderTextColor={"gray"}
            onChangeText={(value) => (text = value)}
          />
          <TouchableOpacity
            style={styles.Button}
            onPress={() => setObjectValue()}
          >
            <Image
              source={ImagesFonts.moonIcon}
              style={styles.moonIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.viewHistorial}>
          {historial.moonText.length ? (
            historial.moonText.map((text, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    ...styles.textHistorial,
                    backgroundColor: index % 2 ? "#4545453D" : "#1D1D1D00",
                    borderBottomLeftRadius:
                      index + 1 == historial.moonText.length ? 10 : 0,
                    borderBottomRightRadius:
                      index + 1 == historial.moonText.length ? 10 : 0,
                  }}
                >
                  {text}
                </Text>
              );
            })
          ) : (
            <Text style={styles.textHistorial}>Sin Historial</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
  },
  scroll: {},
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    margin: 16,
    textAlign: "center",
  },
  viewImage: {
    width: Width,
    height: 200,
  },
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
  viewHistorial: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  textHistorial: {
    color: "white",
    padding: 10,
    fontSize: 16,
  },
});
