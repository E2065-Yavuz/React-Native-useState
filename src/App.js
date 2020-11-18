import React , {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button, Alert, TextInput, StyleSheet, Dimensions} from 'react-native';

const App  = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
const login = () => { Alert.alert ("Hello", `Email: ${email}, Pass: ${password}`)};

return (
  <SafeAreaView style={{flex:1}} >
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style= {{margin:20, fontSize:50,}} >🌍</Text>
      <View >

        <View style={styles.input} >
          <TextInput 
          placeholder='E-posta adresinizi giriniz'
          onChangeText={(userText) => setEmail(userText)}
          keyboardType='email-address'
          />
        </View>
        <View style={styles.input}>
          <TextInput 
          placeholder='Parolanızı giriniz'
          onChangeText={(usePAss) => setPassword(usePAss)}
          secureTextEntry={true}
          />
        </View>
      </View>
      <Button title="Giriş Yap" onPress={login} />
      <Button title="Temizle" onPress={() => {
      setEmail("");
      setPassword("");
      }} />
    </View>
  </SafeAreaView>
);
};
export default App ;

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#e0e0e0',
    padding:10,
    margin:5,
    borderRadius:5,
    width: Dimensions.get('window').width*0.85,

  }
})