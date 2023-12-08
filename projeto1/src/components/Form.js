
import {useState} from 'react';

function Form(){

    function cadastrarUsuario(e){
        //para o comportamento padrão (enviar o html)
        e.preventDefault();
        console.log("Cadastrado :p");
        console.log(name);
    }

    const [name, setName] = useState();

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    placeholder="Digite seu nome..." 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha..." />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;