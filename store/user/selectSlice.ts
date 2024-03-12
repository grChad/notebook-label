import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
	itemSelected: string
}

const initialState: User = {
	itemSelected: '',
}

export const selectSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		renameItemSelected: (state, action: PayloadAction<string>) => {
			state.itemSelected = action.payload
		},
	},
})

export default selectSlice.reducer
export const { renameItemSelected } = selectSlice.actions
