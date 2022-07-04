import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import  { RFValue, RFPercentage }  from 'react-native-responsive-fontsize';



export const Container = styled.View`

    width: 100%;

    margin-top: ${ getStatusBarHeight() + RFValue(10)}px;
    
`;