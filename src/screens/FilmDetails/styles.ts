import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    background-color: #fff;
    height: 100%;
    padding: ${RFValue(20)}px;

`;



export const Image = styled.Image`
    height: ${RFValue(500)}px;
`;

export const FilmName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;

    padding: ${RFValue(18)}px;
    text-align: center;

`;

export const YearAndTime = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(20)}px;
    

`;

export const Year = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.description};
    font-size: ${RFValue(14)}px;

`;

export const Time = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.description};
    font-size: ${RFValue(14)}px;
`;

export const InfoContainer = styled.View`
    margin: 3px 0px;
    flex-direction: row;
    padding: 15px 3px;
    justify-content: space-between;
    background-color: #fff;
`;


export const DescriptionTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(16)}px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.description_dark};
    font-size: ${RFValue(14)}px;

    margin-top: ${RFValue(2)}px;

`;

export const InfoDescription = styled.Text`
    margin: 3px 0px;
    flex-direction: row;
    padding: 15px 3px;
    justify-content: space-between;
    background-color: #fff;

    text-align: justify;

`;

export const Icon = styled.Text`
    padding: 6px 0px;
    text-align: center;
    border-radius: 3px;
    border: 1px;
    background-color: ${({ theme }) => theme.colors.description};
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.description};
    
`;
