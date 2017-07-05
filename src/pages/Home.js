import React, { Component } from 'react'
import ReactMaterialSelect from 'react-material-select'
import MainHeader from '../components/MainHeader'
import Thumbnail from '../components/Thumbnail'
import TextInputMaterial from '../components/TextInputMaterial'
import 'react-material-select/lib/css/reactMaterialSelect.css'
import './App.scss'

class Home extends Component {
  render() {
  	const mainMenu = [
  		{
  			text: 'Makan Gratis',
  			url: 'https://www.google.com',
  			isButton: true,
  			buttonClass: 'button-1'
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
        imageThumb: 'http://lorempixel.com/400/300/food',
        name: 'Tahu bulat',
        price: '500',
        status: 1,
        rate: 4,
      },{
        imageThumb: 'http://lorempixel.com/500/300/food',
        name: 'Tahu kotak',
        price: '700',
        status: 1,
        rate: 3,
      },{
        imageThumb: 'http://lorempixel.com/300/200/food',
        name: 'Tempe',
        status: 0,
        rate: 5,
      },{
        imageThumb: 'http://lorempixel.com/400/300/food',
        name: 'Tempe kripik',
        price: '400',
        status: 1,
        rate: 2,
      },
    ]
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <MainHeader menus={mainMenu} withLogo/>
        <div className='banner'>
          <div className='banner-image'></div>
          {/*<div className='banner-caption sh-right'>4 Sehat 5 Sempurna</div>*/}
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <ReactMaterialSelect label='Pilih Kota'>
                <option dataValue="Star Wars">Darth Vader</option>
              </ReactMaterialSelect>
            </div>
          </div>
          {thumbnails && thumbnails.map(item => (
            <Thumbnail data={item}></Thumbnail>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
