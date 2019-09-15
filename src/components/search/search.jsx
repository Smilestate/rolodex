import React from 'react'
import './search.css'

export const Search = ({handleChange, placeholder}) => <div>
  <input className='search' type='search' onChange={handleChange} placeholder={placeholder} />
</div>