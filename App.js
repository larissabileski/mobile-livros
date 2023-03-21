import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Card(props){
  return (
    <View style= {styles.card}>
      <Image style={styles.livro} source={{ uri: props.livro.capa }}/>
      <Text style={{ color: 'darkred'}}> {props.livro.titulo} </Text>
      <Text style={{ fontSize: 12}}> R$ {props.livro.preco} </Text>
    </View>
  )
}
 export default function App() {
  const livros = [
    {
      capa:'https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium',
      titulo: 'Livro 1',
      preco: 254.90
    },
    {
      capa:'https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium',
      titulo: 'Livro 2',
      preco: 100.90
    },
    {
      capa:'https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium',
      titulo: 'Livro 3',
      preco: 50.90
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold'}}> Olá Mundo </Text>
      <View style = {styles.conteudo}>{ livros.map(livro => <Card livro={livro} />)}</View>
    </View>
  )
 }

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 300,
    resizeMode: 'stretch',
  },
});

export default DisplayAnImage;