import React from 'react'
import NextArrow from '../crouser/nextArrow';
import PrevArrow from '../crouser/prevArrow';
import './collection.css';
import Slider from 'react-slick';

const settings = {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
};

const collection = ({List}) => {
  return (
    <div className='collection-wrapper'>
      <div className='max-width collections'>
          <div className='collection-title'>Collections</div>
          <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                              Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                    </div>
                    <div className='collection-location'>
                              <div>
                                        All collection in Bangalore.
                              </div>
                              <i className='fi fi-rr-caret-right absolute-center'></i>  
                    </div>
          </div>
          <Slider {...settings}>
                    {List.map((item) => {
                              return(
                                        <div>
                                                  <div className='collection-cover'>
                                                  <img src={item.cover} className='collection-image' alt={item.title}/>
                                                  <div className='gradient-bg'></div>
                                                  <div className='collection-card-title'>{item.title}</div>
                                                  <div className='collection-card-subtitle'>
                                                            <div>{item.places}</div>
                                                            <i className='fi fi-rr-caret-right absolute-center' />
                                                  </div>  
                                                  </div>
                                        </div>
                              )
                    })}
          </Slider> 
      </div>
    </div>
  )
}

export default collection
