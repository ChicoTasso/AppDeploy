import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const ProfileScreen = () => {

  return (
    
    <View style={styles.container}>
        <Text> Esta é a Tela de Perfil</Text>
    </View>


  );
};

const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

});

export default ProfileScreen;
