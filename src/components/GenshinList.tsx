import React from "react";
import { getCharacterImage } from "../services/api";

interface GenshinListProps {
  characters: any[];
  onSelectCharacter: (id: string) => void;
}

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
            src={getCharacterImage(character.id, "card")}
            alt={character.name}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="font-bold text-lg mt-2">{character.name}</h2>
          <p className="text-sm text-gray-500">{character.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GenshinList;
