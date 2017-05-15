import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import './App.scss'

class Home extends Component {
  render() {
  	const mainMenu = [
  		{
  			text: 'Makan Gratis',
  			url: 'https://www.google.com',
  			isButton: true,
  			buttonClass: 'btn-primary'
  		},
  		{
  			text: 'Bantuan',
  			url: 'https://www.google.com',
  		},
  		{
  			text: 'Masuk',
  			url: 'https://www.google.com',
  		},
  	]
    return (
      <div>
        <MainHeader menus={mainMenu} withLogo/>
        <div className="container">
	        <div className="banner"></div>
        </div>
      </div>
    );
  }
}

export default Home;
