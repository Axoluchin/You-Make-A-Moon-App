import { useState } from "react";

import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import ImagesFont from "./ImagesFont";
import TemplatesMoon from "./TemplatesMoon";

interface MoonImageProps {}

const Width = Dimensions.get("window").width;

const MoonImage = (props: MoonImageProps) => {
  const [moonSelected, setMoonSelected] = useState(0);

  const upMoon = () => {
    if (moonSelected + 1 == TemplatesMoon.length) {
      setMoonSelected(0);
      return;
    }
    setMoonSelected(moonSelected + 1);
  };

  const downMoon = () => {
    if (moonSelected == 0) {
      setMoonSelected(TemplatesMoon.length - 1);
      return;
    }
    setMoonSelected(moonSelected - 1);
  };

  return (
    <ImageBackground
      source={TemplatesMoon[moonSelected]}
      style={styles.viewImage}
      resizeMode="contain"
    >
      <TouchableOpacity onPress={() => downMoon()}>
        <Image source={ImagesFont.left} style={styles.arrow} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => upMoon()}>
        <Image source={ImagesFont.right} style={styles.arrow} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default MoonImage;

const styles = StyleSheet.create({
  viewImage: {
    width: Width,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow: {
    margin: -16,
  },
});
