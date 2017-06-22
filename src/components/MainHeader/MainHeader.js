import React, { Component } from 'react'
import Subheader from './Subheader'
import Button from '../Button'
import './MainHeader.scss';
import Logo from './assets/logo.png';

class MainHeader extends Component {
  props: {
    withLogo: Boolean,
    menus: Object,
  }

  render() {
    return (
      <div>
        <div className='header'>
          <div className="container">
            <div className='header-title'>
              {this.props.withLogo
                ? <div className='sh-left'><img src={Logo} alt=""/></div>
                : ''
              }
            </div>
            <div className='header-menu'>
              <div className='menus sh-right'>
                {
                  this.props.menus.map((item) => {
                    return (
                      <div className='menu-item'>
                        <a href={item.url}>
                          {item.isButton
                            ? <Button className={`button-bounce ${item.buttonClass}`}><strong>{item.text}</strong></Button>
                            : item.text
                          }
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <Subheader></Subheader>
      </div>
    )
  }
}

export default MainHeader
