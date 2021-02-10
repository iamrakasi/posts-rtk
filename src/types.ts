export interface Post {
  userId: number
  id: number
  title: string
}

export default interface AppState {
  posts: Post[]
}
