import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { FilmsDTO } from "../../dtos/FilmsDTO";
import {
  Container,
  Image,
  FilmName,
  YearAndTime,
  Year,
  Time,
  InfoContainer,
  DescriptionTitle,
  Description,
  InfoDescription,
  Icon,
} from "./styles";

interface Params {
  data: FilmsDTO;
}

export function FilmDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { data } = route.params as Params;

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon>BACK</Icon>
        </TouchableOpacity>

        <Image source={{ uri: `${data.image}` }} />

        <FilmName> {data.title} </FilmName>

        <YearAndTime>
          <Year> Year: {data.release_date} </Year>
          <Time> Time: 124 min </Time>
        </YearAndTime>

        <InfoContainer>
          <DescriptionTitle>Original Title: </DescriptionTitle>
          <Description>{data.original_title} </Description>
        </InfoContainer>

        <InfoContainer>
          <DescriptionTitle>Director: </DescriptionTitle>
          <Description>{data.director} </Description>
        </InfoContainer>

        <InfoContainer>
          <DescriptionTitle>Producer: </DescriptionTitle>
          <Description>{data.producer} </Description>
        </InfoContainer>

        <InfoDescription>
          <DescriptionTitle>Description: </DescriptionTitle>
          <Description>{data.description}</Description>
        </InfoDescription>
      </Container>
    </ScrollView>
  );
}
