import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Card = ({
  color,
  name,
  iconColor,
  textColor,
  subColor,
  IconName,
  topp,
  iconColor1,
  textColor1,
  iconColor2,
  textColor2,
  tezt,
  nameIcon,
}) => {
  return (
    <>
      {name !== "right" && iconColor1 == "gold" ? (
        <Text
          style={{
            marginLeft: 20,
            marginTop: 35,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Near Doctor
        </Text>
      ) : null}
      <View
        style={[styles.container, { backgroundColor: color, marginTop: topp }]}
      >
        <View style={styles.cont}>
          <View>
            <Image
              source={require("../../assets/images/imagee.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.textView}>
            <Text style={{ color: textColor, fontSize: 18, fontWeight: "700" }}>
              Dr. Imran Syahir
            </Text>
            <Text
              style={{
                color: subColor,
                fontSize: 15,
                fontStyle: "bold",
                padding: 5,
              }}
            >
              General Doctor
            </Text>
          </View>

          {nameIcon == "true" ? (
            <AntDesign
              name={name}
              color={iconColor}
              size={30}
              style={styles.icon}
            />
          ) : (
            <Ionicons
              name="location-outline"
              size={30}
              color={"#E4E4E4"}
              style={styles.icon}
            />
          )}
          {name !== "right" && textColor2 == "#9298a5" ? null : (
            <Text style={{ marginTop: 45, color: Colors.textgrey }}>
              {tezt}
            </Text>
          )}
        </View>

        <View style={styles.seperator} />
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              gap: 10,
              marginLeft: 35,
            }}
          >
            <Ionicons name="calendar-outline" size={20} color={iconColor1} />
            <Text
              style={{ color: textColor1, fontSize: 14, fontWeight: "400" }}
            >
              Sunday, 12 June
            </Text>
          </View>
          {/* time sectiom */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              gap: 10,
              marginLeft: 25,
            }}
          >
            <Ionicons name="time-outline" size={20} color={iconColor2} />
            <Text style={{ color: textColor2, fontSize: 14 }}>
              11:00 - 12:00 AM
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 165,
    width: 370,
    borderRadius: 15,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: "#fff", // Ensure there's a background color for the shadow to show
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 1,
  },
  cont: {
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 25,
  },
  textView: {
    marginTop: 30,
  },
  icon: {
    marginTop: 40,
    marginLeft: 75,
  },
  seperator: {
    height: 1,
    width: 320,
    marginLeft: 25,
    marginTop: 10,
    backgroundColor: "lightgrey",
  },
});
