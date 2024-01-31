import React from 'react';
import '../css/formulario.css';

const Formulario = ({ categorias,paises ,onCategoriaChange, onPaisChange }) => {
  const handleChange = (e) => {
    onCategoriaChange(e.target.value);
  };

  const handlePaisChange = (e) => {
    onPaisChange(e.target.value);
  }

  return (
    <div className='formulario-container'>
      <div className='label-container'>

      <label className='categoria' htmlFor="categoria">Selecciona una categoría:</label>
      <select id="categoria" onChange={handleChange}>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
    <div className='label-container'>

        <label className='categoria' htmlFor="categoria">Selecciona un pais:</label>
      <select id="paises" onChange={handlePaisChange}>
        {paises.map((pais) => (
          <option key={pais.nombre} value={pais.value}>
            {pais.nombre}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default Formulario;