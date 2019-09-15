import React from 'react'
import {Card} from '../card/card'
import './card-list.css'

export const CardList = ({userlist}) => <div>
  <div className='card-list'>
    {userlist.map(item => {
      return <Card key={item.id} userlist={item} />
    })}
  </div>
</div>

