import React, { Component } from 'react'
import style from '../chart.css'
import ReactTooltip from 'react-tooltip'

export default class BarChart extends Component {
  state = {}
  constructor(props) {
    super(props)
  }
  onBarTipTool = (item) => {
    this.props.onBarTipTool(item)
  }

  render() {
    const { data, colors, height, width, keys, barHeight } = this.props
    let barChart = []

    let x = width / (12 + 1)
    let offset = 10
    let dataLength = keys.length
    let itemLength = dataLength > 0 ? data[keys[0]].length : 0

    for (let i = 0; i < itemLength; i++) {
      let yPosition = 0

      barChart.push(
        <g key={`bar-${i}`} styleName="rect-bar">
          {
            keys.map((k, idx) => {
              yPosition = Math.floor(data[k][i] * barHeight / 10) + yPosition
              return (
                <rect
                  key={`rect-${k}-${i}`}
                  fill={colors[idx]}
                  width='30'
                  height={Math.floor(data[k][i] * barHeight / 10)}
                  x={(x * (i+1))}
                  y={height + 20 - (yPosition)}
                />
              )
            })
          }
          <rect
            data-tip data-for='barTooltip'
            key={`tooltip-${i}`}
            fill="#bbb"
            width="60"
            x={x * (i+1) - 15}
            height={height + offset}
            y={offset}
            styleName="tooltip-rect"
            onMouseEnter={this.onBarTipTool.bind(this, i)}
          />
        </g>
      )
    }

    return (
      <g>
        {barChart}
      </g>
    )
  }
}
