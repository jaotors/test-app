import React from 'react'

export function UserInfo({ user }) {
  return (
    <div className='User-Info'>
      <img src={user?.avatarUrl} />
      <div className='UserInfo-name'>{user?.name}</div>
    </div>
  )
}

const CommentText = (props) => {
  return <div className='Comment-Text'>{props.text}</div>
}

const CommentDate = (props) => {
  return <div className='Comment-date'>{props.date}</div>
}

function formatDate(date) {
  return date
}

function Comment({ user, text, date}) {
  return (
    <div className='Comment'>
      <UserInfo user={user} />
      <CommentText comment={text} />
      <CommentDate date={formatDate(date)} />
    </div>
  )
}

export default Comment
