import React, { useState } from "react";
import Header from "./components/Header";
import GenshinPage from "./components/GenshinPage";
import GenshinCard from "./components/GenshinCard";

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  return (
    <div>
      <Header />
      {selectedCharacter ? (
        <GenshinCard
          characterId={selectedCharacter}
          onClose={() => setSelectedCharacter(null)} // Cierra la tarjeta al hacer clic en el botón
        />
      ) : (
        <GenshinPage onSelectCharacter={setSelectedCharacter} />
      )}
    </div>
  );
};

export default App;
