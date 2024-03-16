import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { dataCurseDefault, nameSlice } from '../../src/utils/dataForCurse'

export const curseSlice = createSlice({
	name: nameSlice,
	initialState: dataCurseDefault,
	reducers: {
		renameCurse: (state, action: PayloadAction<string>) => {
			state.curse = action.payload
		},
		changeFont: (state, action: PayloadAction<string>) => {
			state.font = action.payload
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
export const { renameCurse, changeFont, changeColor, changeSize } = curseSlice.actions
