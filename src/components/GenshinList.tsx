import React from "react";
// Importamos la función getCharacterImage desde el archivo api.tsx en la carpeta services
import { getCharacterImage } from "../services/api";

// Definimos la interfaz de las props que el componente recibe
interface GenshinListProps {
  characters: any[];
  onSelectCharacter: (id: string) => void;
}

// Componente GenshinList que muestra una lista de personajes
const GenshinList: React.FC<GenshinListProps> = ({
  characters,
  onSelectCharacter,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="border p-4 rounded shadow hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelectCharacter(character.id)}
        >
          <img
            src={getCharacterImage(character.id, "card")} // URL generada por la API
            alt={character.name} // Texto alternativo que muestra el nombre del personaje
            className="rounded-lg shadow" // Estilos de bordes redondeados y sombra
            style={{
              maxWidth: "100%", // Asegura que la imagen no exceda el ancho del contenedor
              height: "auto", // Mantiene las proporciones originales de la imagen
            }}
          />
          <h2 className="font-bold text-lg mt-2">{character.name}</h2>
          <p className="text-sm text-gray-500">{character.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GenshinList;
