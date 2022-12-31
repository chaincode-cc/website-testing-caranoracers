import { configureStore } from '@reduxjs/toolkit';
import nftSlice from './Game/nftSlice';

export default configureStore({
	reducer: {
		nftSelector: nftSlice
	}
});