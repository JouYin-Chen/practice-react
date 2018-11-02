import React, { Component } from 'react'
import style from '../chart.css'

export default class GridLines extends Component {
  state = {}
  constructor(props) {
    super(props)
  }

  render() {

    const { linesNumber, height, top, left, right, bottom } = this.props
    const lines = []

    for (let i = 0; i < linesNumber; i++) {
      let t = (height) * i / linesNumber
      lines.push(
        <line key={i} styleName="bg-horizontal-line" x1={40} y1={t+top} x2={right} y2={t+top} />
      )
    }

    return (
      <g>
        <line styleName="bg-line" x1={left} y1={height+top} x2={right} y2={height+top}></line>
        {lines}
        {/* <line styleName="bg-line" x1={left} y1={-0.5} x2={left} y2={(height-top)}></line> */}
      </g>
    )
  }
}
