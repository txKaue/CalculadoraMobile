import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const BtnOp = ({ conta, atualizarConta }) => {
  // Função para manipular o pressionamento do botão
  const Apertou = (item) => {
    console.log(item); 
    atualizarConta(item); 
  };

  return(
    <View style={styles.corpo}>
      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={() => Apertou('+')}>
        <Text style={styles.texto}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={() => Apertou('-')}>
        <Text style={styles.texto}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={() => Apertou('*')}>
        <Text style={styles.texto}>X</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={() => Apertou('/')}>
        <Text style={styles.texto}>/</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao:{
    backgroundColor: 'lightblue',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  texto:{
    fontSize: 20,
  },
  corpo:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 85,
    height: 320,
    borderRadius: 10,
  },
});

export default BtnOp;
