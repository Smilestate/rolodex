import React from 'react'
import './card.css'

export const Card = props => <div>
  <div className='card-container'>
    <img src={`https://robohash.org/${props.userlist.id}?set=set2&size=180x180`} alt="user" />
    <h3>{props.userlist.name}</h3>
  </div>
</div>

// export const Card = props => <div className='card-list'>
//   {props.userlist.map(item => {
//     return  <div className='card-container' key={item.id}>
//       <img src={`https://robohash.org/${item.id}?set=set2&size=180x180`} alt="user" />
//       <p>{item.name}</p>
//     </div>
//   })}
// </div>