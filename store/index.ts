import { configureStore } from '@reduxjs/toolkit'
import selectSlice from './user/selectSlice'
import curseSlice from './user/curseSlice'
import namesSlice from './user/namesSlice'
import classroomSlice from './user/classroomSlice'

export const store = configureStore({
	reducer: {
		selectElement: selectSlice,
		storeCurse: curseSlice,
		storeNames: namesSlice,
		storeClassroom: classroomSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
