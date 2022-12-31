import { createSlice } from '@reduxjs/toolkit';

export const nftSlice = createSlice({
	name: 'nftSelector',
	initialState: {
		value:0,
		carSelected: null,
		racerSelected: null,
		playerSelected:false
	},
	reducers: {
		increment: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
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