import React from 'react';

import {AuthProvider} from './src/Contexts/auth';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { Routes } from './src/routes';

import {
   useFonts,
   Ubuntu_300Light,
   Ubuntu_400Regular,
   Ubuntu_500Medium
} from '@expo-google-fonts/ubuntu';

export default function App() {

   const [fontsLoaded] = useFonts({
      Ubuntu_300Light,
      Ubuntu_400Regular,
      Ubuntu_500Medium
   });
   
   if(!fontsLoaded){
      return <AppLoading />
   }

return(
   <ThemeProvider theme={theme}>
      <AuthProvider>
         <Routes />
      </AuthProvider>
   </ThemeProvider>
)};

