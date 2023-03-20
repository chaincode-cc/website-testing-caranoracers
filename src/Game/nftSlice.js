import { createSlice } from '@reduxjs/toolkit';

export const nftSlice = createSlice({
	name: 'nftSelector',
	initialState: {
		playerSelected: false,
		carSelected: null,
		racerSelected: null,
	},
	reducers: {
		selectRacer: (state, action) => {
			state.racerSelected = action.payload;
		},
		selectCar: (state, action) => {
			state.carSelected = action.payload;
		},
		setPlayerSelected: (state, action) => {
			state.playerSelected = action.payload;
		}
	}
});

export const { selectRacer, selectCar, setPlayerSelected } = nftSlice.actions;

export default nftSlice.reducer;