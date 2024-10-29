import React from 'react';
import useFetch from '../../utils/hooks';
import { Link } from 'react-router-dom';

function Properties() {
  const { data: properties, loading, error } = useFetch('http://localhost:8080/api/properties');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="properties-grid">
      {properties.map((property) => (
        <Link to={`property/${property.id}`} key={property.id} className="property-card">
          <img src={property.cover} alt={property.title} />
          <h2>{property.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Properties;

