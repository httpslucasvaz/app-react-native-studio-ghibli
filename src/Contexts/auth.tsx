import React, { createContext, useState, useEffect } from "react";

import api from "../servives/api";

import { FilmsDTO } from '../dtos/FilmsDTO'

export const AuthContext = createContext({});



export function AuthProvider({ children }) {
  const [filmsData, setFilmsData] = useState<FilmsDTO[]>([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("films");
        setFilmsData(response.data);
        
      } catch (error) {
        console.log(error);
      }finally {
        setLoader(false)
      }
    }

    fetchMovies();
  }, []);

  return (
    <AuthContext.Provider value={{filmsData, loader}}>
      {children}
    </AuthContext.Provider>
  );
}


