import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import img from 'https://pbs.twimg.com/media/Dl8nOCfXoAAt6E1.png';

const poke = () =>{
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text
      style={{

        fontSize:45,
        alignSelf:"center",
        color:"green",


      }}
      open the tcheca
      />
        <Image 
          source={{

          uri:img,

          }} style = {{ width: 200, height: 210, alignSelf: "center"}}
        />
      </View>
      <TextInput>
        style={{
          height: 40,
          bordercolor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aqui!"
        </TextInput> 
  </ScrollView>
  );
}

export default poke;
