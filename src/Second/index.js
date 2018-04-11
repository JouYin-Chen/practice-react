import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import history from '../history'

export default class Second extends Component {

  link = () => {
    history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Second</h1>
        <button onClick={this.link}>Go Main</button>
      </div>
    )
  }
}
