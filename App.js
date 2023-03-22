import { View, Image, Text, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{ uri: props.livro.capa }} />
      <Text style={{ color: 'darkred' }}> {props.livro.titulo} </Text>
      <Text style={{ fontSize: 12 }}> R$ {props.livro.preco} </Text>
    </View>
  );
}
export default function App() {
  const livros = [
    {
      capa: "https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium",
      titulo: "Livro 1",
      preco: 254.9,
    },
    {
      capa: "https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium",
      titulo: "Livro 2",
      preco: 100.9,
    },
    {
      capa: "https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium",
      titulo: "Livro 3",
      preco: 50.9,
    },
    {
      capa: "https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.jpeg?width=400&format=jpeg&optimize=medium",
      titulo: "Livro 4",
      preco: 69.9,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}> Olá Mundo </Text>
      <View style={styles.conteudo}>
        { livros.map(livro => <Card livro={livro} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#0d0'
  },
  conteudo: {
    flex: '1',
    backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    backgroundColor: 'orange',
    width: '40%',
    height: 215,
    borderRadius: 10,
    margin: 15
  },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 180,
  },
});
