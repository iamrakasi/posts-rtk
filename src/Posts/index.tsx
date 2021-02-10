import {useSelector} from 'react-redux'
import '../App.scss'
import AppState from '../types'
import AddPost from './AddPost'

function Posts() {
  const posts = useSelector((state: AppState) => state.posts)
  return (
    <div className="posts">
      <h1>Posts</h1>
      <AddPost />
      <ul>
        {(!posts || posts.length === 0) && <li>No posts to show. Add one</li>}
        {posts.length > 0 &&
          posts.map(post => (
            <li>
              <button>{post.title}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Posts
