import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListGuru from './../screens/guru/ListGuru';
import Header from './../shared/header';
import UpdateGuru from './../screens/guru/UpdateGuru';
import DetailGuru from './../screens/guru/DetailGuru';

const Stack = createStackNavigator()

const GuruStack = () => {
    return (
       <Stack.Navigator>
        <Stack.Screen
         name='ListGuru'
         component={ListGuru}
         options={({navigation}) => ({
             header: () => <Header navigation={navigation} title='Guru' />
         })}
        />
        <Stack.Screen
         name='UpdateGuru'
         component={UpdateGuru}
         options={{
             title: 'Update Guru'
         }}
        />
        <Stack.Screen 
          name='DetailGuru'
          component={DetailGuru}
          options={{
              title: 'Detail Guru'
          }}
        />
       </Stack.Navigator>
    )
}

export default GuruStack
