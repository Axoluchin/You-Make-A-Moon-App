import { Text, View, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";

import ImagesFont from "./ImagesFont";

interface CreditsProps {
  activate: boolean;
  setActivate: Function;
}

const Credits = (props: CreditsProps) => {
  return (
    <Modal
      style={styles.container}
      visible={props.activate}
      onRequestClose={() => props.setActivate(!props.activate)}
      animationType="fade"
      transparent={true}
    >
      <TouchableOpacity
        onPress={() => props.setActivate(!props.activate)}
        style={styles.container}
        activeOpacity={1}
      >
        <TouchableOpacity style={styles.viewCredits} activeOpacity={1}>
          <Text style={styles.title}>Stats</Text>
          <Text style={styles.text}>Lunas creadas: 45</Text>
          <Text style={styles.text}>Lunas en el historial: 45</Text>
          <Text style={styles.text}>Plantilla favorita: Red</Text>
          <Text style={styles.text}>Palabras escritas: 632</Text>
          <Text style={styles.title}>Creditos</Text>
          <Text style={styles.text}>Desarrollado por: Axoluchin</Text>
          <Text style={styles.text}>Version: 0.2 Alpha</Text>
          <View style={styles.social}>
            <Image source={ImagesFont.github} style={styles.icons}/>
            <Image source={ImagesFont.web} style={styles.icons}/>
            <Image source={ImagesFont.twitter} style={styles.icons}/>
            <Image source={ImagesFont.twitch} style={styles.icons}/>
          </View>
          <Text style={styles.legal}>
            Super Mario Odyssey is a trademark of Nintendo Co., Ltd.
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default Credits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14141470",
  },
  viewCredits: {
    backgroundColor: "#1D1D1D",
    width: "80%",
    height: "70%",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: "#FAFAFA",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  text: {
    color: "#FAFAFA",
    fontSize: 16,
  },
  legal: {
    color: "gray",
    textAlign: "center",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  icons:{
    height: 50,
    width: 50,
  }
});
