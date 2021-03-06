import React, { Component } from 'react'
import styles from './PortalSlider.css'
import $ from "jquery";
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
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
    this.setState({
        visible: false
    })
    $(ReactDOM.findDOMNode(this.refs.main)).hide()
  }

  render() {
    var settings = {
      dots: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 3,
      arrows: true
    };
    return (
        <Slider {...settings} className={styles.base}>
          { this.props.children.map((child, index) => {
            return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
              { child }
            </div>
          }) }
        </Slider>
    )
  }
}
