import {useSelector} from 'react-redux'
import './Posts.scss'
import {Post} from '../../types'
import AddPost from './AddPost'

function Posts() {
  const posts = useSelector((state: Post[]) => state)
  return (
    <div className="posts">
      <h1>Posts</h1>
      <AddPost />
      <ul>
        {(!posts || posts.length === 0) && <li>No posts to show. Add one</li>}
        {posts?.length > 0 &&
          posts.map(post => (
            <li key={post.id}>
              <button>{post.title}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Posts
