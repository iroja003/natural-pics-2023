import React, { useEffect, useState } from 'react'
import GaleriaCard from './GaleriaCard';

const Galeria = () => {
//
const [fotos,setFotos] = useState([])
//
    const getFotos = async ()=>{
        const resp = await fetch ('https://picsum.photos/v2/list?page=2&limit=10') 
        const data = await resp.json()
        console.log(data)
        setFotos(data)
};

 useEffect (()=>{
  getFotos()
 },[]);


    return (
        <>
            <h3>Galeria</h3>
              <div className='container-card d-flex flex-wrap'>
              {
                fotos.map((f) =><GaleriaCard key={f.id} info={f} /> )
              }
              </div>  
        </>
      );
 }

export default Galeria