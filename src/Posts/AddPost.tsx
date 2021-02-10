import './AddPost.scss'
import {useForm} from 'react-hook-form'

function AddPost() {
  const onSubmit = (data: any) => console.log(data)

  const {register, handleSubmit, errors} = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="title"
        placeholder="post title"
        ref={register({required: true, minLength: 5})}
      ></input>
      <input type="submit" value="Create" />
      {errors.title && <div>Title should have a minimum of 5 chars in it</div>}
    </form>
  )
}

export default AddPost
