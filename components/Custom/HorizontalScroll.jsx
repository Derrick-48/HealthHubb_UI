import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const HorizontalScroll = ({ text, isFocused, onFocus }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: isFocused ? Colors.hColor : Colors.border }, // Change based on focus state
      ]}
      onPress={onFocus} // Call the onFocus handler when pressed
    >
      <Text style={{ fontSize: 16, color: isFocused ? Colors.blue : '#9298a5', marginLeft: 35, fontWeight: '700',}}>{text}</Text> 
    </Pressable>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 260,
    borderRadius: 25,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    marginHorizontal: 10, // Add some spacing between items
    marginBottom: 20,
  },
  
});
