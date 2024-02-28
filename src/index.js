import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Exemplo from './Components/Exemplo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));


root.render( // render é o comando de que: o que estiver dentro dele será renderizado na tela do index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

exemplo.render(
  <React.StrictMode>
    <Exemplo />
  </React.StrictMode>
)
