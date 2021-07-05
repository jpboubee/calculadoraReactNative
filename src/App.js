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

  const digito = novoNum => {
    if (novoNum === '0' && numero === '0') {
    } else if (numero != '0') {
      setNumero(numero + novoNum);
    } else {
      setNumero(novoNum);
    }
  };
  const limpar = () => {
    setNumero(0);
    setOperador(null);
    setNumero2(null);
    setResult(null);
  };

  const operacao = (op) => {
      setNumero2(numero);
      setOperador(op);
      setNumero(0);  
  }

  const resultado = () => {
      var a = parseFloat(numero2);
      var b = parseFloat(numero);
      if(operador==='+'){
          setResult(a+b)
      }else if(operador==='-'){
          setResult(a-b)
      }else if(operador==='*'){
          setResult(a*b)
      }else if(operador==='/'){
          setResult(a/b)
      }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.numero}>{numero2}{operador}{numero}</Text>
        <Text style={styles.numero}>{result}</Text>
      </View>
      <View style={styles.botoes}>
      <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
           <Text style={styles.botaoTexto}> C </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
           <Text style={styles.botaoTexto}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
           <Text style={styles.botaoTexto}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('+')}>
           <Text style={styles.botaoTexto}>  +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('7')}>
           <Text style={styles.botaoTexto}>  7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('8')}>
           <Text style={styles.botaoTexto}>  8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('9')}>
           <Text style={styles.botaoTexto}>  9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('-')}>
           <Text style={styles.botaoTexto}>  -</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('4')}>
           <Text style={styles.botaoTexto}>  4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('5')}>
           <Text style={styles.botaoTexto}>  5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('6')}>
           <Text style={styles.botaoTexto}>  6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('*')}>
           <Text style={styles.botaoTexto}>  *</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('1')}>
           <Text style={styles.botaoTexto}>  1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('2')}>
           <Text style={styles.botaoTexto}>  2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('3')}>
           <Text style={styles.botaoTexto}>  3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao('/')}>
         <Text style={styles.botaoTexto}>  /</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
           <Text style={styles.botaoTexto}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('0')}>
           <Text style={styles.botaoTexto}>  0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digito('.')}>
           <Text style={styles.botaoTexto}>.</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.botao} onPress={() => resultado()}>
           <Text style={styles.botaoTexto}>  =</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 10,
   justifyContent: 'center',
   backgroundColor: 'rgba(0,0,0,0.6)',
   alignItems: 'flex-end',
  },
  botao: {
    width: '25%',
    margin: 'auto',
    borderWidth: 1,
    borderColor:'#d3d3d3',
    padding: '1%'
  },
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 30,
    height: '80%',
    
  },
  botaoTexto:{
    textAlign:'center',
    color: '#ffffff',
    fontSize:50,
  },
  cabecalho: {
    height: '40%',
    justifyContent: 'flex-end',
  },
  numero: {
    paddingRight: '5%',
    textAlign: 'right',
    fontSize: 50,
    color: '#ffffff',
  },
  
});

export default App;
