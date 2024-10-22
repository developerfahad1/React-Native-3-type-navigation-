import {StyleSheet, View, Text, Button,  } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <>
    <View style={style.container}>
      <Text style={{
        fontSize : 30,
      }}>Home</Text>
      <Link style={{
        fontSize : 20,
      }} href={'contact'}>Contact</Link>
    </View>
    
    
    </>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default index