import { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
} from "react-native";

import MoonImage from "./components/MoonImage";
import Input from "./components/Input";
import History from "./components/History";
import TopBar from "./components/TopBar";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface historia {
  moonText: Array<string>;
}

export default function App() {
  const [historial, setHistorial] = useState<historia>({
    moonText: [],
  });

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

  const setObjectValue = async (text: string) => {
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

  const deleteMoon = async(text: string) => {
    const pos = historial.moonText.indexOf(text)

    const newHistory = historial.moonText.filter((value,index) => index != pos)
    historial.moonText = newHistory

    try {
      const jsonValue: string = JSON.stringify(historial);
      await AsyncStorage.setItem("@historial", jsonValue);
      getMyObject();
    } catch (e) {
      // save error
    }
    
  }

  useEffect(() => {
    getMyObject();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#1D1D1D"} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <TopBar/>
        <MoonImage />
        <Input setObjectValue={setObjectValue} />
        <History moonList={historial.moonText} delete={deleteMoon}/>
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
});
