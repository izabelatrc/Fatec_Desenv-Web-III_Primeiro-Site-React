import { useState, useEffect } from 'react';

 function Tarefas() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('');

  const tarefasStorage = localStorage.getItem('@tarefas');
  const nomeStorage = localStorage.getItem('@nome');
  const corStorage = localStorage.getItem('@cor');

  useEffect(() => {
    if (nomeStorage) {
        setNome(JSON.parse(nomeStorage));
      } else {
        const nomeUsuario = prompt("Seja bem-vindo(a)! Qual o seu nome?");
        if (nomeUsuario) {
          setNome(nomeUsuario);
          localStorage.setItem('@nome', JSON.stringify(nomeUsuario));
        }
      }
      }, []);

  useEffect(() => {
    if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage));
        }
    if(corStorage){
        setCor(JSON.parse(corStorage));
    }
    }, []);

  useEffect(() => {
      localStorage.setItem('@tarefas', JSON.stringify(tarefas));
      localStorage.setItem('@cor', JSON.stringify(cor));
  }, [tarefas, cor]);

  useEffect(() => {
    if (cor === "lightgreen") {
      document.body.style.backgroundColor = "lightgreen";
    } else if (cor === "pink") {
      document.body.style.backgroundColor = "pink";
    } else if (cor === "aqua") {
      document.body.style.backgroundColor = "aqua";
    }
  }, [cor]);

  function handleRegistro(e){
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput("");
  }

  function handleColors(ev){
    ev.preventDefault();
    setCor(ev.target.value);
  }

  return (
    <div>
        <h1>{nome}, sua lista de tarefas</h1>
        <form onSubmit={handleRegistro}>
            <label>Nome da Tarefa: </label><br/>        
            <input placeholder='Digite uma Tarefa' 
            value={input}
            onChange={ (e) => setInput(e.target.value)}/><br/>
            <button type='submit'>Enviar</button>
        </form><br/><br/>
        <ul>
            {tarefas.map((tarefas) => (
                <li key={tarefas}>{tarefas}</li>
            ))}
        </ul><br/>
        <h3>Escolha uma cor para o site: </h3>
        <label for='cor'>
          <input type='radio' name='cor' value="lightgreen" onChange={(ev) => setCor(ev.target.value)}/>green
        </label><br/>
        <label for='cor'>
          <input type='radio' name='cor' value="pink" onChange={(ev) => setCor(ev.target.value)}/>pink
        </label><br/>
        <label for='cor'>
          <input type='radio' name='cor' value="aqua" onChange={(ev) => setCor(ev.target.value)}/>aqua
        </label><br/>
    </div>
  );
 }
 export default Tarefas;