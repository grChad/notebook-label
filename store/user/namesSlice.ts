import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { backgroundDefault } from '../../src/utils/selectColors'

export interface User {
	names: string
	surnames: string
	background: string
	size: number
}

const initialState: User = {
	names: 'Juan Carlos',
	surnames: 'García Rodríguez',
	background: backgroundDefault,
	size: 25,
}

export const namesSlice = createSlice({
	name: 'names',
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
