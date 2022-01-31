import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import ImagesFont from "./ImagesFont";

interface HistoryProps {
  moonList: Array<string>,
  delete: Function
}

const History = (props: HistoryProps) => {
  return (
    <View style={styles.viewHistorial}>
      {props.moonList.length ? (
        props.moonList.map((text, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: index % 2 ? "#4545453D" : "#1D1D1D00",
                borderBottomLeftRadius:
                  index + 1 == props.moonList.length ? 10 : 0,
                borderBottomRightRadius:
                  index + 1 == props.moonList.length ? 10 : 0,
              }}
            >
              <Text
                style={{
                  ...styles.textHistorial,
                }}
              >
                {text}
              </Text>
              <TouchableOpacity onPress={() => props.delete(text)}>
                <Image source={ImagesFont.trash} style={styles.trash} />
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <Text style={styles.textHistorial}>Sin Historial</Text>
      )}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  viewHistorial: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    flexDirection: "column-reverse",
  },
  textHistorial: {
    color: "white",
    padding: 10,
    fontSize: 16,
  },
  trash: {
    height: 25,
    width: 25,
  },
});
