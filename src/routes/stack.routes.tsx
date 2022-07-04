import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import  {Card}  from '../screens/Card';
import  {FilmDetails}  from '../screens/FilmDetails';
import { propsNavigationStack } from './Models';



const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export function StackRoutes() {
    return(
       <Navigator screenOptions={{headerShown: false}}>
           <Screen name='Card' component={Card}  />
           <Screen name='FilmDetails' component={FilmDetails} />
       </Navigator>
    )
} 