import React from 'react'
import ReactDOM from 'react-dom'

class HelloUser extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      username: 'the dude'
    }
  }

  render() {
    return (
      <div>Hello {this.state.username}</div>
    )
  }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));