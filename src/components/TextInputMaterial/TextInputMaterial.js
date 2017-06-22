import React, { Component } from 'react'
import './TextInputMaterial.scss'

class TextInputMaterial extends Component {
  static defaultProps = {
    className: '',
    id: '',
    name: '',
    value: '',
    type: 'text',
    title: 'text',
  }

  props: {
    children: Node,
    className: String,
    id: String,
    name: String,
    placeholder: String,
    onClick: Function,
    onChange: Function,
    value: String,
    type: String,
    title: String,
    hint: String,
  }

  render() {
    return (
      <div className='form-group'>
        <input
          id={this.props.id}
          type={this.props.type}
          required='required'
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <label className='control-label' htmlFor='input'>{this.props.title}</label><i className='bar' />
        <span className='info-hint'>{this.props.hint}</span>
      </div>
    )
  }
}

export default TextInputMaterial
