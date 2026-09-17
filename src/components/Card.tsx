import type { CardProps } from "../App";

export default function Card(props: CardProps) {
    return (
        <div className="card">
            <img src="" alt={props.url} />
            <h2>{props.title}</h2>
            <p>{props.actor}</p>
            <p>{props.gender}</p>
            <p>{props.house}</p>
            <p>{props.wand_core}</p>
            <p>{props.alive}</p>
        </div>
    )
}