import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DestinationList.css';

function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  const BASE_URL = 'https://guia-turistico-backend.onrender.com'; 

  useEffect(() => {
    axios.get(`${BASE_URL}/api/destinos`)
      .then(response => setDestinations(response.data))
      .catch(error => console.error('Erro ao buscar destinos:', error));
  }, []);

  return (
    <div className="container">
      <ul className="list">
        {destinations.map(dest => (
          <li className="list-item" key={dest.id}>
            <Link to={`/destination/${dest.id}`}>{dest.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationList;
