import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React from 'react';


const HomeScreen = () => {

  return (
    
    <View style={styles.container}>
        <Text> Essa é a Home </Text>
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

export default HomeScreen;
