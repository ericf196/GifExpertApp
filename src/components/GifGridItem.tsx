import React from 'react';
import 'animate.css';


const GifGridItem = ({id, title, url}:  {id: string, title: string, url: string} ) => {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>
  )
}

export default GifGridItem;
