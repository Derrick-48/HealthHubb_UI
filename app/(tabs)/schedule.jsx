import {
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import HorizontalScroll from "../../components/Custom/HorizontalScroll";
import Card from "../../components/Custom/Card";
import { Colors } from "@/constants/Colors";

const Schedule = () => {
  const [focusedId, setFocusedId] = useState(null); // State to track the focused item
  const data = [
    {
      id: 1,
      text: "Doctor's Appointments",
    },
    {
      id: 2,
      text: "Upcoming Schedule",
    },
    {
      id: 3,
      text: "Composite Schedule",
    },
  ];

  const handleFocusChange = (id) => {
    setFocusedId(id); // Set the focused item ID
  };

  return (
    <SafeAreaView style={styles.container}>
     
        <FlatList
          scrollEnabled={true} // Disable scrolling for the FlatList to allow scrolling in ScrollView
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <HorizontalScroll
              text={item.text}
              isFocused={focusedId === item.id} // Determine if this item is focused
              onFocus={() => handleFocusChange(item.id)} // Handle focus change
            />
          )}
          contentContainerStyle={styles.flatListContainer} // Use contentContainerStyle to control spacing
        />
         <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card and Button Sections */}
        {Array.from({ length: 3 }).map((_, index) => (
          <View key={index} style={styles.cardContainer}>
            <Card
              color={Colors.white}
              textColor={"#000"}
              subColor={"#9298a5"}
              iconColor1="#9298a5"
              textColor1="#9298a5"
              iconColor2={"#9298a5"}
              textColor2={"#9298a5"}
              nameIcon= 'true'
            />
            <Pressable style={[
              styles.Pressable,
              { backgroundColor: Colors.hColor },
            ]}>
              <Text style={{ fontSize: 16, color: Colors.blue, fontWeight: '700' }}>Details</Text>
            </Pressable>
          </View>
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 50 : 50,
  },
  flatListContainer: {
    paddingVertical: 10, // Control vertical spacing if needed
  },
  cardContainer: {
    marginBottom: 20, // Space between card sections
    paddingHorizontal: 10, // Add some horizontal padding if needed
  },
  Pressable: {
    height: 50,
    width: 350,
    borderRadius: 25,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    marginHorizontal: 10, // Add some spacing between items
  },
});
