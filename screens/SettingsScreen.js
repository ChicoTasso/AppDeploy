import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const SettingsScreen = () => {

  return (
    
    <View style={styles.container}>
        <Text> Essa é a tela de Configurações </Text>
    </View>


  );
};

const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default SettingsScreen;
