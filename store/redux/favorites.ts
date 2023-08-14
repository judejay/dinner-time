import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface FavoriteInitialState {
    ids: string[]
}

const initialState: FavoriteInitialState ={
    ids: [],
}


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            state.ids.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload), 1);
        }
    }
});

export const { addFavorite, removeFavorite  }  = favoritesSlice.actions;
export default favoritesSlice.reducer;

