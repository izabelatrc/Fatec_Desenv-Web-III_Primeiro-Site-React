import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Exemplo from './Components/Exemplo';
import Cadastro from './Components/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));
const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));


/*root.render( // render é o comando de que: o que estiver dentro dele será renderizado na tela do index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*exemplo.render(
  <React.StrictMode>
    <Exemplo />
  </React.StrictMode>
)*/

cadastro.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
)
