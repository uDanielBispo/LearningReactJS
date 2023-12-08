import styles from "./Evento.module.css";

function Button(props){

    return (<button onClick={props.event} className={styles.ativar}>{props.text}</button>)
}

export default Button;