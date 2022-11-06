
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
// import logo from './assets/ip2.png'

export default function App() {
  const [data, setData] = useState('')
  const findMyIp = async() => {
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json()
   setData(data.origin)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.made} >Olá dev, você está no React Native!</Text>
         {/* <Image source={logo}/> */}
        </View>
      
      <View style={styles.body}>
        
     
        <Text style={styles.ip}>{data}</Text>
        <Button title="Decobrir meu IP!" onPress={findMyIp}/>
      </View>
      <View style={styles.footer}>
       <Text style={styles.made}>Feito com ❤ por Honorato!</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
 },
 ip:{
  color: 'white',
  paddingBottom: 20,
  paddingTop:20
 },
 header:{
  paddingTop:30,
  paddingBottom:10
 },
 footer: {
  paddingTop:10,
  paddingBottom:10
 },
 made: {
  color:'white',
  textAlign:'center'
 }
});
