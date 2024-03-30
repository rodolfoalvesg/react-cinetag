import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorites";

export default function FavoriteProvider({ children }){
    const [favorite, setFavorite] = useState([]); // [1]
    
    return (
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorite(){
    const {favorite, setFavorite} = useContext(FavoriteContext);

    function addFavorite(newFavorite){
       const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);

       let newList = [...favorite];

       if(!repeatedFavorite){
           newList.push(newFavorite);
           return setFavorite(newList);
       }

       newList = favorite.filter((item) => item.id !== newFavorite.id);
       return setFavorite(newList);
    }

    return {favorite, addFavorite};
}