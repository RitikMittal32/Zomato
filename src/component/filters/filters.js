import React from 'react'
import './filter.css';
import Filteritems from './filteritems/filteritems';

const filters = ({filterList}) => {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter) => {
          return(
                    <Filteritems filter={filter} key={filter.id} />
          )
      })}
    </div>
  )
}

export default filters
