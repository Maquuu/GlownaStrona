
import { StyleSheet, Text, View, Image,TextInput} from 'react-native';
import React from 'react';

export default function App() {
  return (

    <View style={styles.container}>
    <Image style={styles.img} source={require('./assets/StronaGlowna.png')}/>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:0,
  },
  img: {
    width:'100%',
    height:'100%'
  },
  
});
