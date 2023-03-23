import { createSlice } from '@reduxjs/toolkit';

export const nftSlice = createSlice({
	name: 'nftSelector',
	initialState: {
		playerSelected: false,
		carSelected: null,
		racerSelected: null,
		results: false,
		confetti: false,
		players: 0,
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
		},
		setShowResults: (state, action) => {
			state.results = action.payload;
		},
		setThrowConfetti: (state, action) => {
			state.confetti = action.payload;
		},
		setPlayers: (state, action) => {
			state.players = action.payload;
		}
	}
});

export const { selectRacer, selectCar, setPlayerSelected, setShowResults, setThrowConfetti, setPlayers} = nftSlice.actions;

export default nftSlice.reducer;