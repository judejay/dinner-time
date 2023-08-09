import { ReactNode, createContext, useState } from "react";


type FavoritesContextProviderProps = {
    children: ReactNode
}

type FavoritesContextType = {
    ids: string[] | null,
    addFavorite: (id: string) => void,
    removeFavorite:  (id: string) => void,
}



export const FavoritesContext = createContext<FavoritesContextType | null>(null);
 const FavoritesContextProvider =  ({children} : FavoritesContextProviderProps) =>{
    const [favorite, setFavorite] = useState<string[]>([]);

    const addFavorite = (id: string) =>{
        setFavorite((currentFavs) => [...currentFavs, id]);
    }
    
    const removeFavorite = (id: string) => {
        setFavorite((currentFavs) => currentFavs.filter((mealId) => mealId !== id )
        );
    }
    const value: FavoritesContextType = {
        ids: favorite,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };
  
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;