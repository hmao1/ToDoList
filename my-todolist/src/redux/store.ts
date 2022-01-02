import { configureStore } from '@reduxjs/toolkit'
import sigUpReducer from './features/auth/signUpSlice';
import authReducer from './features/auth/authSlice';
import toDoReducer from './features/events/toDoSlices';


export const store = configureStore({
  reducer: {
    signUp: sigUpReducer,
    auth: authReducer,
    toDo: toDoReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch