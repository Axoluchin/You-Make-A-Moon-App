import { useState } from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import ImagesFont from "./ImagesFont";
import Credits from "./Credits"

interface TopBarProps {}

const TopBar = (props: TopBarProps) => {
  const [activModal, setactivModal] = useState(false);
  return (
    <View style={styles.topbar}>
      <Text style={styles.title}>You Make A Moon</Text>
      <TouchableOpacity onPress={()=> setactivModal(true)}>
        <Image source={ImagesFont.info} style={styles.info} />
      </TouchableOpacity>
      <Credits activate={activModal} setActivate={setactivModal}/>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  info: {
    width: 30,
    height: 30,
  },
});
