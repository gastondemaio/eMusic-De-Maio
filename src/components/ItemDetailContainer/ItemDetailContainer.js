import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'bandas', detalleId)
      getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [detalleId])

    return (
      <div className='items'>
        <ItemDetail data={data}/>  
      </div>
       
        
  )
}

export default ItemDetailContainer