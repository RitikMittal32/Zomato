import React from 'react'
import Filter from '../filters/filters';
import Deliverycollection from './deliverycollection/deliverycolllection';
import Topbrands from './topbrands/topbrands';
import Exploresection from '../exploresection/exploresection';
import { restaurent } from '../../data/restaurent';

const DeliveryFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders"></i>,
    title:'filters',

  },
  {
    id:2,
    title:'Rating: 4.0+',
    
  } ,
  {
    id:3,
    title:'Safe and Hygenics',
    
  },
  {
    id:4,
    title:'Pure Veg',
    
  },
  {
    id:5,
    icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
    title:'Delivery Time',
    
  },
  {
    id:6,
    title:'Great Offers',
    
  }
]

const restaurantList = restaurent;

const delivery = () => {
  return (
    <div>
        <div className='max-width'>

        <Filter filterList={DeliveryFilters} />
        <Deliverycollection />
          <Topbrands />
        <Exploresection list={restaurantList} collectionName='Delivery Restaurants in Bangalore'/>
      </div>
    </div>
  )
}

export default delivery
