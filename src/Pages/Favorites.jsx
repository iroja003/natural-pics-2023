import React from 'react';

import GaleriaCard from '../Components/GaleriaCard';
import { useFavoritoContext } from '../Contexto/FavoritoContext';
//

const Favorites = () => {

// usar el context
 const {favoritos} = useFavoritoContext();

  return (
    <div>
        <h1>Favoritos</h1>
        <div className='d-flex flex-wrap container-card'>
          {
              favoritos.map((f) =><GaleriaCard key={f.id} info={f} favori/> )
          } 
        </div>
    </div>
  );
}

export default Favorites