import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { dataNamesDefault as Data } from '../../src/utils/dataForNames'

export interface User {
	names: string
	surnames: string
	background: string
	size: number
}

const initialState: User = {
	names: Data.names,
	surnames: Data.surnames,
	background: Data.background,
	size: Data.size,
}

export const namesSlice = createSlice({
	name: Data.nameSlice,
	initialState: initialState,
	reducers: {
		renameNames: (state, action: PayloadAction<string>) => {
			state.names = action.payload
		},
		renameSurnames: (state, action: PayloadAction<string>) => {
			state.surnames = action.payload
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
export const { renameNames, renameSurnames, changeBackground, changeSize } =
	namesSlice.actions
