import React, { useContext, useState } from "react";
import { TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../Contexts/auth";
import {
  Container,
  Film,
  Cover,
  Description,
  TitleAndScore,
  ContainerFlatList,
  Score,
  ScoreView,
  ScoreAlign,
} from "./styles";

import { FilmsDTO } from "../../dtos/FilmsDTO";
import { propsStack } from "../../routes/Models";
import { Header } from "../../header";
import { Load } from "../../Load";


export function Card() {
  const navigation = useNavigation<propsStack>();
  const {filmsData} = useContext(AuthContext);
  const {loader} = useContext(AuthContext);
  
  function handleFilmsDetails(data: FilmsDTO) {
    navigation.navigate("FilmDetails", { data });
  }

  

  return (
    <Container>
      <SafeAreaView>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header />
         { loader ? <Load /> : 
        <Film
          keyExtractor={(item: { id: any }) => item.id}
          numColumns={2}
          data={filmsData}
          renderItem={({ item }) => {
            return (
              <>
                <ContainerFlatList>
                  <TouchableOpacity onPress={() => handleFilmsDetails(item)}>
                    <Cover source={{ uri: `${item.sprites.back_default}` }} />

                    <TitleAndScore>
                      <Description>{item.title} </Description>
                    </TitleAndScore>

                    <ScoreAlign>
                      <ScoreView>
                        <Score>{item.rt_score}</Score>
                      </ScoreView>
                    </ScoreAlign>
                  </TouchableOpacity>
                </ContainerFlatList>
              </>
            );
          }}
        />}
      </SafeAreaView>
    </Container>
  );
}
