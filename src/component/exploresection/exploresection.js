import React from 'react'
import './exploresection.css';
import Explorecard from './explorecard/explorecard';

const exploresection = ({list,collectionName}) => {
  return (
    <div>
      <div className='max-width explore-section'> 
          <div className='collection-title'>{collectionName}</div>
          <div className='explore-grid'>
            {
              list.map((restaurant) => {
                return(
                  <Explorecard restaurant={restaurant}/>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default exploresection
