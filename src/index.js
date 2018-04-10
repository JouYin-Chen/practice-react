
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>Hello, World!</h2>
        <h3>Hello, World!</h3>
        <h4>Hello, World!</h4>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
export default App
