import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FilmsDTO } from "../../dtos/FilmsDTO";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Film = styled(FlatList as new () => FlatList<FilmsDTO>).attrs({
  showsVerticalScrollIndicator: false,
})`
  height: ${RFValue(500)}px;
`;

export const ContainerFlatList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Cover = styled.Image`
  width: ${RFValue(170)}px;
  height: ${RFValue(250)}px;
`;

export const Description = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 2px;
`;

export const TitleAndScore = styled.View`
  width: ${RFValue(170)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ScoreAlign = styled.View`
  align-items: flex-end;
  margin-right: ${RFValue(10)}px;
`;

export const ScoreView = styled.View`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(100)}px;
  margin-top: ${RFValue(-90)}px;
`;

export const Score = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #fff;
`;
