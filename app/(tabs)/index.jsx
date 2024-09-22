import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/Custom/CustomHeader";
import Card from "../../components/Custom/Card";
import SearchInput from "../../components/Custom/SearchInput";
import HorizontalButtons from "../../components/Custom/HorizontalButtons";
import { Colors } from "@/constants/Colors";
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'

const index = () => {
  const data = [
    {
      id: 1,
      name: "medical",
      text: "Covid 19",
    },
    {
      id: 2,
      name: "person-add",
      text: "Doctor",
    },
    {
      id: 3,
      name: "bandage",
      text: "Medicine",
    },
    {
      id: 4,
      name: "medkit",
      text: "Hospital",
    },
  ];
  return (
    <View style={{ backgroundColor: Colors.background}}>
      <CustomHeader />
      <Card 
      color={Colors.blue} 
      nameIcon= 'true'
      name={'right'}
      textColor={Colors.white}
      subColor={'#E4E4E4'} 
      iconColor={Colors.white}
      iconColor1 = '#fff'
      textColor1 = '#fff'
      iconColor2 = '#fff'
      textColor2 = '#fff'

      />
      
      <SearchInput />
      <FlatList
        scrollEnabled={false}
        data={data}
        numColumns={4}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HorizontalButtons name={item.name} text={item.text} />
        )}
      />
      <Card 
      color={Colors.white} 
      textColor={'#000'}
      subColor={'#9298a5'} 
      iconColor={''}
      topp={15}
      iconColor1 = 'gold'
      textColor1 = 'gold'
      iconColor2 = {Colors.blue}
      textColor2 = {Colors.blue}
      tezt= '1.2km'
      />
      
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
