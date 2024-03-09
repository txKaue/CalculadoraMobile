import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Display = ({conta}) => {

  return(
    <View style={style.container}>

      <Text style={style.texto}>{conta}</Text>

    </View>
  );

}

export default Display;

const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    width: 360,
    height: 80,
    backgroundColor: '#696969',
    borderRadius: 20,
    margin: 20
  },
  texto:{

    textAlign:'right',
    color: 'white',
    fontSize: 30,
    marginRight: 20,

  }
});