import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
import { getGifs } from '../helper/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import 'animate.css';

const GifGrid = ({ category }: any) => {

  //const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  /*useEffect(() => {
    getGifs(category).then(
      (images)=> setImages(images)
    );
  }, [])*/

  return (
    <>
      {loading && <p>Cargando...</p>}
      <h3 className='animate__animated animate__bounce'>{category}</h3>
      <div className="card-grid">
        {images.map((image: any) => {
          return <GifGridItem key={image.id} {...image} />
        })}

      </div>
    </>
  )
}

export default GifGrid;
