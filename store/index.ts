import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/slice'
import selectSlice from './user/selectSlice'
import curseSlice from './user/curseSlice'
import namesSlice from './user/namesSlice'

export const store = configureStore({
	reducer: {
		names: userSlice,
		selectElement: selectSlice,
		storeCurse: curseSlice,
		storeNames: namesSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
