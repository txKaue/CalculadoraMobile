// BtnIg.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BtnIg = ({ resolverConta }) => {
  return (
    <View>
      <TouchableOpacity style={style.botao} onPress={resolverConta}>
        <Text style={style.texto}>=</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  botao: {
    backgroundColor: '#D2691E',
    width: 360,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
  },
  texto: {
    marginLeft: 20,
    textAlign:'center',
    color: 'white',
    fontSize: 30,
    marginRight: 20,
  }
});

export default BtnIg;
