import s from './card.module.css'

export const Card = (props) => {
    return(
            <div className={s.card}>
              <img src={props.imagem} />
              <h4>Nome: {props.nome}</h4>
              <p>Especie: {props.especie}</p>
              <p>KI: {props.ki}</p>
            </div>
    )
    
}