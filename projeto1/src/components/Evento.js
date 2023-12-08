import Button from "./eventos/Button";

function Evento({numero}){

function meuEvento(){
    console.log(`Fui ativado`);
}

function meuSegundoEvento(){
    console.log("Segundo evento");
}

    return(
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={meuSegundoEvento} text="Primeiro Evento"/>
        </div>
    )
}

export default Evento;