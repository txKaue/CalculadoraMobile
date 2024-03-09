// BtnLimpa.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BtnLimpa = ({ limparConta }) => {
  return (
    <View>
      <TouchableOpacity style={style.botao} onPress={limparConta}>
        <Text style={style.texto}>C</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  botao:{
    backgroundColor: 'lightblue',
    width: 360,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
  },
  texto:{
    marginLeft: 20,
    textAlign:'center',
    color: 'black',
    fontSize: 30,
    marginRight: 20,
  }
});

export default BtnLimpa;
