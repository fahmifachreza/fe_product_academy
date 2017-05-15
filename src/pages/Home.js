import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import Thumbnail from '../components/Thumbnail'
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

    const thumbnails = [
      {
        imageThumb: 'http://placehold.it/200x300',
        name: 'Tahu bulat',
        price: '500',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },{
        imageThumb: 'http://placehold.it/300x300',
        name: 'Tahu kotak',
        price: '700',
      },
    ]
    return (
      <div>
        <MainHeader menus={mainMenu} withLogo/>
        <div className='banner'>
          <div className='banner-image'></div>
          {/*<div className='banner-caption sh-right'>4 Sehat 5 Sempurna</div>*/}
        </div>
        <div className='container'>
          {thumbnails && thumbnails.map(item => (
            <Thumbnail data={item}></Thumbnail>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
