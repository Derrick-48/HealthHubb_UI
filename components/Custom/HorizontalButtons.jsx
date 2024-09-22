import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const HorizontalButtons = ({ name, text}) => {
  return (
    <View style={{flexDirection: 'column'}}>
    <TouchableOpacity style={styles.container}>
      <Ionicons name={name} size={24} color={'#0084FF'}/>
    </TouchableOpacity>
    <Text style={{ fontSize: 16, color: '#9298a5', marginLeft: 35, fontWeight: '700',}}>{text}</Text>
    </View>
  )
}

export default HorizontalButtons

const styles = StyleSheet.create({
    container:{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: Colors.border,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})