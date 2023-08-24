import React from 'react'
import NextArrow from '../../crouser/nextArrow';
import PrevArrow from '../../crouser/prevArrow';
import './deliverycollection.css';
import Slider from 'react-slick';
import DeliveryItems from './deliveryitem/deliveryitem';

const deliveryitems = [
          {
                    id:1,
                    title:'Pizza',
                    cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
          },
          {
                    id:2,
                    title:'Burger',
                    cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
          },
          {
                    id:3,
                    title:'Chole Bhature',
                    cover:"https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
          },
          {
                    id:4,
                    title:'Sandwich',
                    cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
          },
          {
                    id:5,
                    title:'Dosa',
                    cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
          },
          {
                    id:6,
                    title:'Chana Bhatura',
                    cover:"https://b.zmtcdn.com/data/dish_photos/17c/4ed6ae972bba945ad8ef0edcab0f717c.jpg"
          },
          {
                    id:7,
                    title:'Idli',
                    cover:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
          },
          {
                    id:8,
                    title:'Cake',
                    cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
          },
          {
                    id:9,
                    title:'Paratha',
                    cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
          },
          {
                    id:10,
                    title:'Thali',
                    cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
          }
          
]

const settings = {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
};

const deliverycolllection = () => {
  return (
    <div className='delivery-collections'>
          <div className='max-width'>
                    <div className='collection-title'>Eat what makes you  happy</div>
                    <Slider {...settings}>
                      {deliveryitems.map((item) => {
                        return(
                          <DeliveryItems item={item}/>
                        
                        )
                      })}
                    </Slider>

          </div>
      
    </div>
  )
}

export default deliverycolllection
