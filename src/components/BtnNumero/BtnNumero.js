// BtnNum.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const BtnNum = ({ atualizarConta }) => {
  return (
    <View style={style.corpo}>
      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('1')}>
        <Text style={style.texto}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('2')}>
        <Text style={style.texto}>2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('3')}>
        <Text style={style.texto}>3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('4')}>
        <Text style={style.texto}>4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('5')}>
        <Text style={style.texto}>5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('6')}>
        <Text style={style.texto}>6</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('7')}>
        <Text style={style.texto}>7</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('8')}>
        <Text style={style.texto}>8</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} activeOpacity={0.7} onPress={() => atualizarConta('9')}>
        <Text style={style.texto}>9</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao0} activeOpacity={0.7} onPress={() => atualizarConta('0')}>
        <Text style={style.texto}>0</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  botao: {
    backgroundColor: 'lightblue',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5
  },

  botao0: {
    backgroundColor: 'lightblue',
    width: 260,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5
  },

  texto: {
    fontSize: 20,
  },
  corpo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 280,
    height: 320,
    borderRadius: 10,
  },
});

export default BtnNum;
