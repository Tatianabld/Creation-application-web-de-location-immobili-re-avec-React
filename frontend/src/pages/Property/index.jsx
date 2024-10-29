import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import useFetch from "../../utils/hooks"; // Assurez-vous d'importer votre hook personnalisé
import Slideshow from "../../components/Slideshow";
import Collapse from '../../components/Collapse';
import redStar from '../../assets/Vector.png';
import greyStar from '../../assets/Vector (1).png';

const Property = () => {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const { data: properties, loading, error } = useFetch('http://localhost:8080/api/properties'); // Récupérer la liste des propriétés

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Trouver la propriété correspondante à l'ID
  const property = properties.find((property) => property.id === id);

  if (!property) {
    // Rediriger vers la page d'erreur si l'ID est incorrect
    return <Navigate to="/error" />;
  }
  
  
    return (
        <div className="property-container">
          <Slideshow images={property.pictures} alt={property.title} />
          <div className="property-section">
            <div className="property-section1">
              <h1>{property.title}</h1>
              <p>{property.location}</p>
              <div className="tags">
               {property.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
                ))}
              </div>  
            </div>
            <div className="property-section2">
              <div className="host-info">
                <p className="host-name">{property.host.name}</p>
                <img src={property.host.picture} alt={property.host.name} className="host-pic" />
              </div>
              <div className="property-rating">
              <img src={redStar} alt="évaluaion par étoiles" />
              <img src={redStar} alt="évaluaion par étoiles" />
              <img src={redStar} alt="évaluaion par étoiles" />
              <img src={greyStar} alt="évaluaion par étoiles" />
              <img src={greyStar} alt="évaluaion par étoiles" />
              </div>
            </div>
          </div>
          <div className="property-collapse">
          <Collapse title="Description">
            <p>{property.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <p className="equipment-list">
                  {property.equipments.map((equipment, index) => (
                  <span key={index}>{equipment}</span>
                  ))}
            </p>
          </Collapse>
          </div>
        </div>
    );
  };
  
  export default Property;
  
