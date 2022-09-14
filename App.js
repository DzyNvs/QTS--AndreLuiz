import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Texto} from './styles';

export default function App() {
  return (
    <Container>
      <Image source={{ uri: 'https://i.pinimg.com/736x/3c/55/f5/3c55f592d97f4a47d8eb0a87fc39825b--cutest-dogs-world-cutest-dog.jpg' }} style={styles.logo} />
      <Texto>
        A imagem acima aparece por causa da tag view e image
      </Texto>

      <TouchableOpacity
        onPress={() => alert('enganei o bobo')}
        style={{ backgroundColor: 'papayawhip'}}>
        <Texto>Aperte para ver cachorros gratis online atualizado 2022</Texto>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },

});