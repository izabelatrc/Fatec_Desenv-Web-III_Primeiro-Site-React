import React from 'react';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      email: '',
      resultado: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Um cadastro foi enviado!');
    event.preventDefault();
    this.setState({
      resultado: {
        nome: this.state.nome,
        idade: this.state.idade,
        email: this.state.email
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input
              name="nome"
              type="text"
              value={this.state.nome}
              onChange={this.handleChange} />
          </label><br/><br/>
          <label>
            Idade:
            <input
              name="idade"
              type="text"
              value={this.state.idade}
              onChange={this.handleChange} />
          </label><br/><br/>
          <label>
            E-mail:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange} />
          </label><br/><br/>
          <input type="submit" value="Enviar" />
        </form>

        {this.state.resultado && (
          <div>
            <p>Bem vindo(a), {this.state.resultado.nome}!</p>
            <p>Idade: {this.state.resultado.idade} anos</p>
            <p>Email: {this.state.resultado.email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Cadastro;
