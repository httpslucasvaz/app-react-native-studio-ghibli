
import React, { useEffect, useState } from 'react';
import { Header } from '../header';

import { Card } from '../screens/Card';
import { FilmDetails } from '../screens/FilmDetails';
import { Container } from './styles';




export function MovieList() {
    
    
    return(
        <Container>
            <Header />
            <Card />  
            <FilmDetails />
        </Container>
    )
}
