import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState('0');
  const [operador, setOperador] = useState();
  const [numero2, setNumero2] = useState();
  const [result, setResult] = useState();
  const [ponto, setPonto] = useState(true);

  const digito = novoNum => {
    if (novoNum != '.') {
      if (numero != '0') {
        setNumero(numero + novoNum);
      } else {
        setNumero(novoNum);
      }
    } else {
      if (ponto) {
        setNumero(numero + novoNum);
        setPonto(false);
      } else {
        setNumero(numero);
      }
    }
  };

  const limpar = () => {
    setNumero(0);
    setOperador(null);
    setNumero2(null);
    setResult(null);
    setPonto(true);
  };

  const operacao = op => {
    setNumero2(numero);
    setOperador(op);
    setNumero('');
    setPonto(true);
  };

  const resultado = () => {
    var a = parseFloat(numero2);
    var b = parseFloat(numero);
    if (operador === '+') {
      setResult(a + b);
    } else if (operador === '-') {
      setResult(a - b);
    } else if (operador === '*') {
      setResult(a * b);
    } else if (operador === '/') {
      setResult(a / b);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.numero}>{numero2}{operador}{numero}</Text>
        <Text style={styles.numero}>{result}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoC} onPress={() => limpar()}>
          <Text style={styles.botaoTexto}> AC </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('+')}>
          <Text style={styles.botaoTexto}> +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('1')}>
          <Text style={styles.botaoTexto}> 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('2')}>
          <Text style={styles.botaoTexto}> 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('3')}>
          <Text style={styles.botaoTexto}> 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('-')}>
          <Text style={styles.botaoTexto}> -</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('4')}>
          <Text style={styles.botaoTexto}> 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('5')}>
          <Text style={styles.botaoTexto}> 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('6')}>
          <Text style={styles.botaoTexto}> 6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('*')}>
          <Text style={styles.botaoTexto}> *</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('7')}>
          <Text style={styles.botaoTexto}> 7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('8')}>
          <Text style={styles.botaoTexto}> 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('9')}>
          <Text style={styles.botaoTexto}> 9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('/')}>
          <Text style={styles.botaoTexto}> /</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoZero} onPress={() => digito('0')}>
          <Text style={styles.botaoTexto}> 0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('.')}>
          <Text style={styles.botaoTexto}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => resultado()}>
          <Text style={styles.botaoTexto}> =</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191A',
   

  },
  botao: {
   
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
 
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
  },
  botaoZero: {
   
   height: Dimensions.get('window').width / 4,
   width: Dimensions.get('window').width / 4 * 2,
   padding: 20,

   textAlign: 'center',
   borderWidth: 1,
   borderColor: '#888',
},
botaoC: {
   
   height: Dimensions.get('window').width / 4,
   width: Dimensions.get('window').width / 4 * 3,
   padding: 20,

   textAlign: 'center',
   borderWidth: 1,
   borderColor: '#888',
},
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 30,
    
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 35,

  },
  cabecalho: {

    justifyContent: 'flex-end',
    height:"22%"
  },
  numero: {
    paddingRight: '5%',
    textAlign: 'right',
    fontSize: 50,
    color: '#ffffff',
  },
 
});

export default App;
