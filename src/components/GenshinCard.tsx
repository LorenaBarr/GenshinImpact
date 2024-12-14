import React from "react";
import { getCharacterDetails, getCharacterImage } from "../services/api";

interface GenshinCardProps {
  characterId: string;
  onClose: () => void;
}

const GenshinCard: React.FC<GenshinCardProps> = ({ characterId, onClose }) => {
  const [character, setCharacter] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchCharacterDetails = async () => {
      const data = await getCharacterDetails(characterId);
      setCharacter(data);
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (!character) return <div>Cargando...</div>;

  return (
    <div className="p-6 border rounded shadow max-w-lg mx-auto mt-8 relative bg-white">
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cerrar
      </button>

      {/* Imagen del personaje con tamaño dinámico */}
      <div className="flex justify-center">
        <img
          src={getCharacterImage(characterId, "card")} // URL generada por la API
          alt={character.name} // Texto alternativo basado en el nombre del personaje
          className="rounded-lg shadow" // Estilo: bordes redondeados y sombra
          style={{
            maxWidth: "100%", // Asegura que la imagen no sobrepase el contenedor
            height: "auto", // Mantiene la proporción de la imagen
          }}
        />
      </div>

      {/* Información del personaje */}
      <h2 className="text-2xl font-bold mt-4 text-center">{character.name}</h2>
      <p className="text-lg text-gray-600 text-center">{character.title}</p>
      <p className="text-md mt-4">{character.description}</p>
      <p className="text-md mt-2">
        <strong>Visión:</strong> {character.vision}
      </p>
      <p className="text-md">
        <strong>Arma:</strong> {character.weapon}
      </p>
      <p className="text-md">
        <strong>Nación:</strong> {character.nation}
      </p>
      <p className="text-md">
        <strong>Rareza:</strong> {character.rarity}⭐
      </p>
    </div>
  );
};

export default GenshinCard;
