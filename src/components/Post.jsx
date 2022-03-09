import React, { useState } from 'react'

class ClassPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({name: 'another click'})
  }

  render() {
    
    return(
      <div onClick={this.handleClick}>{this.state.name}</div>
    )
  }
}

const TestPost = (props) => {
  const [name, setName] = useState('')

  const handleClick = () => {
    setName('asdfasdf')
  }

  return(
    <div onClick={handleClick}>{name}</div>
  )
}