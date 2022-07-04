import React from "react";
import { Image } from "react-native";

import { Container, Logo } from './style'

export function Header() {

    return(
        <Container> 
        <Logo source={require('../assets/images/logo.jpeg')} />
        </Container>

    )
}