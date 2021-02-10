import {Post} from '../../types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
  reducers: {
    create: (state, {payload}: PayloadAction<{title: string}>) => {
      const currentLargestId = Math.max.apply(
        Math,
        state.map(post => post.id),
      )
      console.log('currentLargestId', currentLargestId)
      state.push({
        id: currentLargestId + 1,
        title: payload.title,
        userId: 1,
      })
    },
  },
})

export const {create: createPostActionCreator} = postsSlice.actions

export default postsSlice
