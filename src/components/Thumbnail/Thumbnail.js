import React, { Component } from 'react'
import Button from '../Button'
import './Thumbnail.scss';

class Thumbnail extends Component {
  props: {
    data: Object,
  }

  render() {
    console.log(this.props);
    const data = this.props.data
    return (
      <div className='thumbnail-main'>
        <div className='thumbnail-photo'>
          <img src={data.imageThumb} alt='' />
        </div>
        <div className='thumbnail-name'>{data.name}</div>
        <Button className='btn btn-secondary btn-full'>Add to Snack Box</Button>
      </div>
    )
  }
}

export default Thumbnail
