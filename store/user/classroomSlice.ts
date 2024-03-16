import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { dataClassroomDefault, nameSlice } from '../../src/utils/dataForClassroom'

export const classroomSlice = createSlice({
	name: nameSlice,
	initialState: dataClassroomDefault,
	reducers: {
		renameClass: (state, action: PayloadAction<string>) => {
			state.className = action.payload
		},
		changeFont: (state, action: PayloadAction<string>) => {
			state.font = action.payload
		},
		changeBackground: (state, action: PayloadAction<string>) => {
			state.background = action.payload
		},
		changeColor: (state, action: PayloadAction<string>) => {
			state.color = action.payload
		},
		changeSize: (state, action: PayloadAction<number>) => {
			state.size = action.payload
		},
	},
})

export default classroomSlice.reducer
export const { renameClass, changeFont, changeBackground, changeColor, changeSize } =
	classroomSlice.actions
