import React from 'react'
//

import { useFavoritoContext } from '../Contexto/FavoritoContext';
import { Card, Button } from 'react-bootstrap';

//
const GaleriaCard = ({info, favori }) => {
  
  // usar el context
  const {favoritos, addFavorito, delFavorito} = useFavoritoContext()

  
  return (
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={info.download_url} />
       <Card.Body>
          <Card.Title>Author:{info.author}</Card.Title>
        </Card.Body>
        {
         favori ?
          <Button className='btn-primary' onClick={ () =>{ delFavorito(info.id) }} >Delete Favoritos</Button>
          :
          <Button className='btn-primary' onClick={ () =>{ addFavorito(info) }} >Add Favoritos</Button>
        }  
    </Card>
  );
}

export default GaleriaCard