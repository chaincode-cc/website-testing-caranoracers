import { createSlice } from '@reduxjs/toolkit';

export const nftSlice = createSlice({
	name: 'nftSelector',
	initialState: {
		playerSelected: false,
		value:0,
		carSelected: null,
		racerSelected: null,
	},
	reducers: {
		increment: state => {
			state.value += 1;
		},
		selectRacer: (state, action) => {
			state.racerSelected = action.payload;
		},
		selectCar: (state, action) => {
			state.carSelected = action.payload;
		},
		playerSelected: (state) => {
			state.playerSelected = true;
		}
	}
});

// Action creators are generated for each case reducer function
export const { increment, selectRacer, selectCar, playerSelected } = nftSlice.actions;

export default nftSlice.reducer;