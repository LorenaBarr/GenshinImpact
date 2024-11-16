import React, { useEffect, useState } from "react";
import GenshinList from "./GenshinList";
import { getCharacters } from "../services/api";

const GenshinPage: React.FC<{ onSelectCharacter: (id: string) => void }> = ({
  onSelectCharacter,
}) => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        setError("No se pudieron cargar los personajes.");
      }
    };

    fetchCharacters();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  // Cálculo de los personajes a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4">
      {/* Mostrar la lista de personajes */}
      <GenshinList
        characters={currentCharacters}
        onSelectCharacter={onSelectCharacter}
      />

      {/* Botones de paginación */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
        >
          Anterior
        </button>
        <span className="text-lg font-bold">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-blue-500 text-white"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default GenshinPage;
