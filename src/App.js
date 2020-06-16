import React from 'react';
import Pregunta from './componets/Pregunta';


function App() {
  return (
    <div className="container">
      <h1>Gasto semanal 1</h1>

      <div className="contenido-principal contenido">
        <Pregunta />
      </div>
    </div>
  );
}

export default App;
