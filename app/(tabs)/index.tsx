
import React from "react";
import { Text, View, } from "react-native";

const App = () => {
  return(
    <View style={
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <Text style={
          {  
            color:"white"
          }
        }>
        Bem-vindo!
      </Text>
       
      <Text style={
          {  
            marginTop: 20,
            color:"white"
          }
        }>
        # Sistema de Gestão da 4M #
      </Text>
    </View>    
  )
};

export default App;