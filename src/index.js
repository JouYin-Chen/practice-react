
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, Route } from 'react-router-dom'

import Second from './Second/index'
import Chart from './Chart/index'

import history from './history'

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div >
          <Route exact path="/" component={Chart} />
          <Route path="/Second" component={Second} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
export default App
