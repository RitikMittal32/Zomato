import React from 'react';
import './topbrands.css';
import Brandlist from './brandlist/brandlist';
import Slider from 'react-slick';
import NextArrow from '../../crouser/nextArrow';
import PrevArrow from '../../crouser/prevArrow';


const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const brandlist = [
          {
                    id:'1',
                    title: 'Burger King',
                    time:'32 min',
                    cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp',
          },
          {
                    id:'2',
                    title: 'Haldiram',
                    time:'39 min',
                    cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp',
          },
          {
                    id:'3',
                    title: 'Biryani By Kilo',
                    time:'75 min',
                    cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/0c45494107cfd8e2d6e9bd855bfec678_1669019847.png?output-format=webp',
          },
          {
                    id:'4',
                    title: 'Faasos-Wraps & Rolls',
                    time:'35 min',
                    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655800914.png?output-format=webp',
          },
          {
                    id: '5',
                    title : 'Natural Ice Cream',
                    time: '22min' , 
                    cover :'https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png?output-format=webp',
          }

]

const topbrands = () => {
  return (
    <div className='top-brands'>
      <div className='max-width'>
        <div className='collection-title'>Top brands for you</div>
          <Slider {...settings} > 
              {brandlist.map((branditem) => {
                return(
                  <div><Brandlist branditem={branditem}/></div>
                )
              })}
          </Slider>
      </div>
    </div>
  )
}

export default topbrands
