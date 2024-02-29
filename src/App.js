import Nome from "./Components/Nome";

function App() {
  return (
    <div className="App">
      <h1>Bem vindo(a) ao meu projeto</h1>
      <h2>Este projeto foi feito em React</h2>
      <Nome aluno = "Maria" idade={20}/><br>
      </br>
      <Nome aluno = "João" idade={23}/>
    </div>
  );
}

export default App;
