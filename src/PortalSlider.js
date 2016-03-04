import React, { Component } from 'react'
import styles from './PortalSlider.css'
import $ from "jquery";
import ReactDOM from 'react-dom'
export default class PortalSlider extends Component {
  constructor(props) {
      super(props)
      this.state = {
        currentIndex: 0,
        ltr: true, // Left to Right
      }
    }

  calcStyle(index) {
    let delay = this.state.ltr ? index : 2 - index
    return {
      transform: `translate(${index * 320}px, 0)`,
      transitionDelay: `${delay * 100}ms`,
    }
  }

  onClickPrev() {
    this.setState({
      currentIndex: Math.max(0, this.state.currentIndex - 3),
      ltr: false
    })
  }
  onClickNext() {
    this.setState({
      currentIndex: Math.min(this.props.children.length - 3, this.state.currentIndex + 3),
      ltr: true
    })
  }
  onClickHide(){
    $(ReactDOM.findDOMNode(this.refs.main)).hide()
  }

  render() {
    return (
      <div ref="main">
        <a onClick={this.onClickHide.bind(this)} ref="hide">消える</a>
        <a onClick={this.onClickPrev.bind(this)}>前へ</a>
        <a onClick={this.onClickNext.bind(this)}>次へ</a>
        <div className={styles.base}>
          { this.props.children.map((child, index) => {
            return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
              { child }
            </div>
          }) }
        </div>
      </div>
    )
  }
}
