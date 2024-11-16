const BASE_URL = 'https://genshin.jmp.blue';

export const getCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters/all?lang=en`);
  if (!response.ok) {
    throw new Error('Error al obtener los personajes.');
  }
  return response.json();
};

export const getCharacterDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}/characters/${id}?lang=en`);
  if (!response.ok) {
    throw new Error(`Error al obtener los detalles del personaje con ID: ${id}`);
  }
  return response.json();
};

// Generar URL de imagen
export const getCharacterImage = (id: string, imageType: string = 'card') => {
  return `${BASE_URL}/characters/${id}/${imageType}`;
};
