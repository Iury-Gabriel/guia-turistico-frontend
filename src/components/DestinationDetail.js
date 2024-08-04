import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Map from './Map';
import './DestinationDetail.css';

function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  const BASE_URL = 'https://guia-turistico-backend.onrender.com';    

  useEffect(() => {
    axios.get(`${BASE_URL}/api/destinos/${id}`)
      .then(response => setDestination(response.data))
      .catch(error => console.error('Erro ao buscar destino:', error));
  }, [id]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="title">{destination.nome}</h1>
      <img className="image" src={"" + destination.imagem + ""} alt={destination.nome} />
      <p className="description">{destination.descricao}</p>
      <Map latitude={destination.latitude} longitude={destination.longitude} />
      <div className="attractions">
        <h2>Atrações</h2>
        <ul>
          {destination.atrativos.map(attraction => (
            <li key={attraction.id}>
              <strong>{attraction.nome}</strong>: {attraction.descricao}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DestinationDetail;
