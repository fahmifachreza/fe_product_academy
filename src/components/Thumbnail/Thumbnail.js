import React, { Component } from 'react'
import Button from '../Button'
import Love from '../Love'
import './Thumbnail.scss';

class Thumbnail extends Component {
  props: {
    data: Object,
  }

  render() {
    const data = this.props.data
    return (
      <div className='thumbnail-main'>
        <div className='thumbnail-photo'>
          <img src={data.imageThumb} alt='' />
        </div>
        <div className='thumbnail-info'>
          <h3 className='thumbnail-name'>{data.name}</h3>
          <Love rate={3}></Love>
          {/*<small>Rp. {data.price},-</small>*/}
          <Button className='button button-2 button-full'>Add to Snack Box</Button>
        </div>
      </div>
    )
  }
}

export default Thumbnail
