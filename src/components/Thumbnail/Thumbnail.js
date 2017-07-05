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
          <img className={data.status ? '' : 'greyscaled'} src={data.imageThumb} alt='' />
        </div>
        <div className='thumbnail-info'>
          <h3 className='thumbnail-name'>{data.name}</h3>
          <div>Rp {data.price ? data.price : '-'}</div>
          <Love rate={data.rate}></Love>
          {/*<small>Rp. {data.price},-</small>*/}
          <Button className={data.status ? 'button button-2 button-full' : 'button button-2 button-full disabled'}>{data.status ? 'Add to Box' : 'Out of Stock'}</Button>
        </div>
      </div>
    )
  }
}

export default Thumbnail
