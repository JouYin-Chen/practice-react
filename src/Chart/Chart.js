import React, { Component } from 'react'
import './chart.css'
import XAxis from './components/XAxis'
import YAxis from './components/YAxis'
import GridLines from './components/GridLine'
import BarChart from './components/BarChart'
import ReactTooltip from 'react-tooltip'


import PropTypes from 'prop-types'
export default class Chart extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    margins: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
    }),
  }

  static defaultProps = {
    width: 1000,
    height: 600,
    margins: {
      top: 20,
      bottom: 30,
      right: 20,
      left: 20,
    },
  }

  state = {
    onMouseBar: null,
  }
  constructor(props) {
    super(props)
  }

  get paintingZone() {
    const { width, height } = this.props
    const { left, top, right, bottom } = this.props.margins

    return {
      left: left,
      top: top,
      right: width - right,
      bottom: height - bottom,
      width: width - right - left,
      height: height - bottom - top,
    }
  }
  BarTipToolText = (i) => {
    this.setState({
      onMouseBar: i,
    })
  }
  render(){

    const dataset = {
      'series': ['C1', 'C2'],
      'colors': ['#cb4d3e', '#3d5599', '#2d3d3d'],
      'layers': {
        C1: [20, 18, 83, 34, 23, 32, 76, 53, 16, 46, 17, 61],
        C2: [50, 38, 31, 43, 33, 24, 27, 56, 31, 23, 67, 24],
      },
    }

    let dataSetArrange = () => {
      let sumData = Array.from({ length: 12 })

      for(let i = 0; i < 12; i++) {
        sumData[i] = Object.keys(dataset.layers).map((k) => (dataset.layers[k][i]))
      }

      let sumBar = sumData.map((n) => {
        return n.reduce((a, b) => a + b, 0)
      })

      return {
        sumData,
        maxData: Math.max(...sumBar),
      }
    }
    let arrangeData = dataSetArrange()

    const { width, height } = this.props
    const { left, top, right, bottom, height: pHeight, width: pWidth } = this.paintingZone
    let linesNumber = arrangeData.maxData > 0 ? Math.ceil( arrangeData.maxData / 10 ) : 10
    let barHeight = pHeight / linesNumber

    return (
      <div styleName="chart-container">
        <ReactTooltip id="barTooltip" place="top" type="dark">
          {
            this.state.onMouseBar >= 0 ? (
              <div>
                {
                  dataset.series.map((k, i) => {
                    return (
                      <div key={`div-${k}`}>
                        <span key={`spen-${k}`}>{`${k}: `}</span>
                        <span key={`bar-${k}`}>{dataset.layers[k][this.state.onMouseBar]}</span>
                      </div>
                    )
                  })
                }
              </div>
            ) : null
          }
        </ReactTooltip>
        <svg width={width} height={height}>
          <GridLines
            linesNumber={linesNumber}
            left={left}
            top={top}
            right={right}
            bottom={bottom}
            height={pHeight} />
          <YAxis
            width={pWidth}
            height={pHeight}
            margins={left}
            top={top}
            linesNumber={linesNumber}
            barHeight={barHeight} />
          <XAxis width={pWidth} height={pHeight} margins={left} />
          <BarChart
            data={dataset.layers}
            colors={dataset.colors}
            keys={dataset.series}
            height={pHeight}
            width={pWidth}
            barHeight={barHeight}
            onBarTipTool={this.BarTipToolText}
          />
        </svg>
      </div>
    )
  }
}
