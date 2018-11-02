import React, { PureComponent } from 'react'

export default class XAxis extends PureComponent {
  render() {

    let { top, width, height, margins, linesNumber, barHeight } = this.props
    // let barHeight = height / linesNumber

    let yAxisArray = Array.from({ length: `${linesNumber}` }).map(function(item, i) {
      return (i + 1) * 10
    })

    let yAxis = []
    for (let i = 0; i < yAxisArray.length; i++) {

      yAxis.push(
        <g key={`xAxis-${i}`} transform={`translate(0, ${height - (barHeight * (i+1) -5)})`}>
          <text key={`xAxis-text-${i}`} dy=".71em" y="9" x="0">{yAxisArray[i]}</text>
        </g>
      )
    }

    return (
      <g>
        {yAxis}
      </g>
    )
  }
}
