import { createContext, useContext, useState } from "react";

export const FavoritoContext = createContext();

export const FavoritoProvider = ({children}) => {

       const [favoritos, setFavoritos] = useState([]);

        const addFavorito = (info) => {
            setFavoritos([...favoritos, info])
        };

        const delFavorito = (id) => {
           setFavoritos(favoritos.filter((f)=> f.id != id))
        };

        return (
                    <FavoritoContext.Provider value={{favoritos, addFavorito, delFavorito}}>
                        {children}
                    </FavoritoContext.Provider>
        );
};

export const useFavoritoContext = ()=> useContext(FavoritoContext);
