import React from 'react'
import {Card} from '../card/card'
import './card-list.css'

export const CardList = props => <div>
  <div className='card-list'>
    {props.userlist.map(item => {
      return <Card key={item.id} userlist={item} />
    })}
  </div>
</div>