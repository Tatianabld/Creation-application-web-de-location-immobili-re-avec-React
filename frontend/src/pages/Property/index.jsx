import { useParams } from "react-router-dom";
import useFetch from "../../utils/hooks"; // Assurez-vous d'importer votre hook personnalisé

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
    return <div>Property not found</div>; // Gérer le cas où la propriété n'est pas trouvée
  }

  return (
    <div>
      <img src={property.pictures} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.host.name}</p>
      <img src={property.host.picture} alt={property.host.name} />
      <p>{property.location}</p>
      <p>{property.description}</p>
      {/* Ajoutez d'autres détails ici selon vos besoins */}
    </div>
  );
};

export default Property;
