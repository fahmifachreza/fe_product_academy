import React, { Component } from 'react'
import './Button.scss';

class Button extends Component {
  props: {
    text: String,
    className: String,
    disabled: Boolean,
    onClick: Function,
    children: Node,
  }

  render() {
    return (
      <button
        className={`button ${this.props.className}`}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.text}
        {this.props.children}
      </button>
    )
  }
}

export default Button
