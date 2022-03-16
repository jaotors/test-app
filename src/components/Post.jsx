import React, { useState } from 'react'

const Post = (props) => {
  const [name, setName] = useState('')

  const handleClick = () => {
    setName('asdfasdf')
  }

  return <div onClick={handleClick}>{name}</div>
}

export default Post
