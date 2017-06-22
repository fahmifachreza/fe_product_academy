import React, { Component } from 'react'

class Love extends Component {
  props: {
    rate: Number,
  }

  renderIcons() {
    console.log('mlebu rene');
    let arr = []
    let i
    const rate = this.props.rate
    for (i = 1; i < 6; i++) {
      arr.push(<i className={`material-icons icon-small ${i <= rate ? 'active' : ''}`}>favorite</i>,)
    }
    return arr
  }

  render() {
    return (
      <div>
        {this.renderIcons()}
      </div>
    )
  }
}

export default Love
