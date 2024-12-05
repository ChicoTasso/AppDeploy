import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

const LoginScreen = ({ navigation }) => { 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [visibilidade, setVisibilidade] = useState(true);

  const alterarVisibilidade = () => {
    setVisibilidade(!visibilidade);
  };

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Campo de Email e Senha é obrigatório');
    } else {
        navigation.navigate('Tabs');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/loginbackground.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={visibilidade}
          />
          <TouchableOpacity 
            onPress={alterarVisibilidade} 
            style={styles.iconContainer}
          >
            <Entypo
              name={visibilidade ? 'eye-with-line' : 'eye'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  passwordContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 35,
    backgroundColor: '#0984e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
