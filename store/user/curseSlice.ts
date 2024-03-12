import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { colorTextCurseDefault as colorDefault } from '../../src/utils/selectColors'

export interface User {
	curse: string
	color: string
	size: number
}

const initialState: User = {
	curse: 'Matemática',
	color: colorDefault,
	size: 70,
}

export const curseSlice = createSlice({
	name: 'curse',
	initialState: initialState,
	reducers: {
		renameCurse: (state, action: PayloadAction<string>) => {
			state.curse = action.payload
		},
		changeColor: (state, action: PayloadAction<string>) => {
			state.color = action.payload
		},
		changeSize: (state, action: PayloadAction<number>) => {
			state.size = action.payload
		},
	},
})

export default curseSlice.reducer
export const { renameCurse, changeColor, changeSize } = curseSlice.actions
