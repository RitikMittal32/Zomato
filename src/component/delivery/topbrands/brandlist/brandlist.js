import React from 'react';
import './brandlist.css';

const brandlist = ({branditem}) => {
  return (
    <>
      <div className='brand-item-cover'>
        <img src={branditem.cover} className='brand-item-image' alt={branditem.title} />
        <div className='brand-item-title absolute-center'>{branditem.title}</div>
        <div className='brand-item-time absolute-center' >{branditem.time}</div>
      </div>
    </>
  )
}

export default brandlist
