import React, { Component } from 'react'

export default class XAxis extends Component {
  state={}
  render() {

    let { width, height, margins } = this.props

    const Year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let barWidth = width / (Year.length + 1 )

    let xAxis = []
    for (let i = 0; i < Year.length; i++) {
      xAxis.push(
        <g key={`xAxis-${i}`} transform={`translate(${barWidth * (i+1)}, ${600-20})`}>
          <text key={`xAxis-text-${i}`} dy=".71em" y="9" x="0">{Year[i]}</text>
        </g>
      )
    }

    return (
      <g>
        {xAxis}
      </g>
    )
  }
}
