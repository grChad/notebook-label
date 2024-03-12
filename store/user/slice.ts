import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
	curse: string
	firstName: string
	lastName: string
}

const initialState: User = {
	curse: 'Comunicacion',
	firstName: 'Thiago',
	lastName: 'Rivera',
}

export const userSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		renameCurse: (state, action: PayloadAction<string>) => {
			state.curse = action.payload
		},
		renameNames: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload
		},
		renameLastName: (state, action: PayloadAction<string>) => {
			state.lastName = action.payload
		},
	},
})

export default userSlice.reducer
export const { renameCurse, renameNames, renameLastName } = userSlice.actions
