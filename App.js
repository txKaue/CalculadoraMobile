import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BtnIg, BtnLimpa, BtnNum, BtnOp, Display } from './src/components'; 

export default function App() {
  const [conta, setConta] = useState(''); 

  const atualizarConta = (item) => {
    setConta(prevConta => prevConta + item);
  };

  const limparConta = () => {
    setConta("");
  };

  const resolverConta = () => {
    try {
      const resultado = eval(conta);
      setConta(resultado.toString());
    } catch (error) {
      setConta('Erro');
    }
  };

  return (
    <View style={styles.corpo}>
      <View style={styles.corpoDisplay}>
        <Display conta={conta} />
      </View>

      <View>
        <BtnLimpa limparConta={limparConta}></BtnLimpa>
      </View>

      <View style={styles.corpoTeclas}>
        <BtnNum atualizarConta={atualizarConta} />
        <BtnOp atualizarConta={atualizarConta} />
      </View>

      <View style={styles.corpoIg}>
        <BtnIg resolverConta={resolverConta}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  corpoTeclas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'left',
    justifyContent: 'center',
  },
  corpoDisplay: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'left',
    justifyContent: 'center',
  },
  corpo: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#000000',
  },
  corpoIg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
