import {useRef, useEffect} from 'react'
import './AddPost.scss'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {createPostActionCreator} from './postsSlice'

function AddPost() {
  const {register, handleSubmit, errors, reset} = useForm()
  const titleRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (titleRef.current) {
      register(titleRef.current, {minLength: 5})
    }
  }, [register])

  const onSubmit = (data: any, e: any) => {
    console.log(data)
    if (titleRef.current) {
      titleRef.current.focus()
    }
    reset()
    dispatch(createPostActionCreator({title: data.title}))
  }

  const dispatch = useDispatch()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="title"
        placeholder="post title"
        ref={titleRef}
      ></input>
      <input type="submit" value="Create" />
      {errors.title && <div>Title should have a minimum of 5 chars in it</div>}
    </form>
  )
}

export default AddPost
