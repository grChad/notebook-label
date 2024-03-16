import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { dataNamesDefault, nameSlice } from '../../src/utils/dataForNames'

export const namesSlice = createSlice({
	name: nameSlice,
	initialState: dataNamesDefault,
	reducers: {
		renameNames: (state, action: PayloadAction<string>) => {
			state.names = action.payload
		},
		renameSurnames: (state, action: PayloadAction<string>) => {
			state.surnames = action.payload
		},

		changeFont: (state, action: PayloadAction<string>) => {
			state.font = action.payload
		},
		changeBackground: (state, action: PayloadAction<string>) => {
			state.background = action.payload
		},
		changeSize: (state, action: PayloadAction<number>) => {
			state.size = action.payload
		},
	},
})

export default namesSlice.reducer
export const { renameNames, renameSurnames, changeFont, changeBackground, changeSize } =
	namesSlice.actions
