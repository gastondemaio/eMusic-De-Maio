import React from 'react'

const Item = ({info}) => {
  return (
    <a href='' className='albums'>
        <img src={info.img} alt=''/>
        <p>{info.title}</p>
        <p>{info.price}</p>
    </a>
  )
}

export default Item