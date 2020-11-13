import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const CustomButton = ({ onPress, text }) => {
    return (
     <TouchableOpacity onPress={onPress}>
         <View style={styles.button}>
             <Text style={styles.buttonText}> { text } </Text>
         </View>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: '#4B78FA',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
      textAlign: 'center',
    }
  });

export default CustomButton
