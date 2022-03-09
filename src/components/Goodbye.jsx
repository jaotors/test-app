import React from 'react'

class Goodbye extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }


  render() {
    return <div>Goodbye {this.state.name}</div>
  }
}

export default Goodbye
