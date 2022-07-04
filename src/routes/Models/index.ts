import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FilmsDTO } from '../../dtos/FilmsDTO'

export type propsNavigationStack = {
    Card: {
        image: string;
        id: string;
        rt_score: number;
        title: string;
    }

    FilmDetails: {
        id: string;
      title: string;
      original_title: string;
      original_title_romanised: string;
      description: string;
      director: string;
      producer: string;
      release_date: number;
      running_time: number;
      rt_score: number;
    }

}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
