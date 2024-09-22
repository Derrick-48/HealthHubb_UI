import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textCon}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Hi James</Text>
      </View>
      <Image
        source={require("../../assets/images/imageee.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    top: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 80,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  textCon: {
    marginLeft: 20,
  },
  hello: {
    fontSize: 16,
    color: "grey",
    padding: 2,
  },
  name: {
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
  },
});
