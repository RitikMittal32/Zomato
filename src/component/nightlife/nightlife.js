import React from 'react'
import Collection from '../collection/collection'
import Filters from '../filters/filters'
import { nightLife } from '../../data/nightLife'
import Exploresection from '../exploresection/exploresection'


const Collectionlist = [
  {
    id: '1',
    title: '11 Eid Special Restaurants',
    cover:  'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
    places: '12 places'
  },
  {
    id: '2',
    title: '9 Unique Dining Experiences',
    cover:  'https://b.zmtcdn.com/data/collections/16e3a8b363d4592a72b2c4f486c63fb8_1678096853.jpg',
    places: '9 places'
  },
  {
    id: '3',
    title: '21 Best Insta-worthy Places',
    cover:  'https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg',
    places: '21 places'
  },
  {
    id: '4',
    title: '24 Great Cafes',
    cover:  'https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg',
    places: '25 places'

  },
  {
    id: '5',
    title: '26 Serene Rooftop Places',
    cover:  'https://b.zmtcdn.com/data/collections/ace6a36e46e20a93c1dd062cac4c8216_1676456116.jpg',
    places: '28 places'
  },
  {
    id: '6',
    title: '10 Celeb-loved Places',
    cover:   'https://b.zmtcdn.com/data/collections/8dd5adbf91d78c8d11796c6b230539ef_1674568824.jpg',
    places: '10 places'
  },
  {
    id: '7',
    title: '21 Lit Party Places',
    cover:   'https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg',
    places: '21 places'
  },
  {
    id: '8',
    title: '17 Finest Microbreweries',
    cover:   'https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg',
    places: '16 places'
  }
]

const DiningFilters=[
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

const Nightlife = nightLife

const nightlife = () => {
  return (
    <div>
      <Collection List={Collectionlist}/>
      <div className='max-width'>
        <Filters filterList={DiningFilters} />
      </div>
      <Exploresection list={Nightlife} collectionName='Nightlife Restaurants in' />
    </div>
  )
}

export default nightlife
