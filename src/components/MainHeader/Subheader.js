import React, { Component } from 'react'
import Button from '../Button'
import './MainHeader.scss';

class Subheader extends Component {
  render() {
    return (
      <div className='header sub-header'>
        <div className="container">
          <div className='header-menu'>
            <div className='menus sh-left'>
              <div className='menu-item'>
                <a href='#'>
                  Ehe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Subheader
