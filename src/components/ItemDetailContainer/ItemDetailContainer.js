import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const albums = 
    {id:1, img:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", price: 1500}

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(albums)
        }, 3000)
      });
      getData.then(res => setData(res))
  
    }, [])

    return (
        <ItemDetail data={data}/>   
  )
}

export default ItemDetailContainer