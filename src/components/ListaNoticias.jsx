import React from 'react';
import Noticia from './Noticia';
import '../css/listaNoticias.css';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className='container-noticias'>
      {noticias.map((noticia,index) => (
        <Noticia key={index} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListaNoticias;