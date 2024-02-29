function Cadastro({nome, idade, email}) {
        return (
            <form>
                <label>Nome:</label>
                <input type="text" value={nome} /><br></br>
                <label>Idade:</label>
                <input type="number" value={idade} /><br></br>
                <label>Email:</label>
                <input type="text" value={email} /><br></br><br></br>
                <button type="submit">Cadastrar</button>
            </form>
        )
    }
    
    export default Cadastro