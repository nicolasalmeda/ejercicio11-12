import React from 'react';
import '../css/noticia.css';

const Noticia = ({ noticia }) => {
  
  return (
    <div className='card-noticia'>
      <img className='card-img' src={noticia.image_url} alt={noticia.title} />
      <h2 className='card-title'>{noticia.title}</h2>
      <p className='card-description'>{noticia.description}</p>
      <a className='card-button' href={noticia.link}>
      <button>Ver Noticia Completa</button>
      </a>
    </div>
  );
};

export default Noticia;