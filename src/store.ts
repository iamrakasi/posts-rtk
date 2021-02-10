import {configureStore, createSlice} from '@reduxjs/toolkit'
import {Post} from './types'

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Lorem 1',
    userId: 1,
  },
  {
    id: 2,
    title: 'Twinkle star',
    userId: 1,
  },
  {
    id: 3,
    title: 'Redux post',
    userId: 1,
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPosts,
  reducers: {},
})

export default configureStore({
  reducer: postsSlice.reducer,
})
