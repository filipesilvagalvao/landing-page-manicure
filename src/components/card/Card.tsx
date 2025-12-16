import styles from "./Card.module.css"

type Props = {
    svg:any,
    title: string,
    list: string[],
    time: string
}

function Card({ svg, title, list, time }: Props) {
    return (
        <article className={styles.card}>
            {svg}
            <h3 className={styles.card__title}>{title}</h3>

            <ul className={styles.card__list}>
                {
                    list && list.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>

            <p className={styles.card__time}>
                <i className="fa-regular fa-clock"></i>
                Duração média:
                <span>{time}</span>
            </p>

            <a href="#" className="schedule">Agendar <i className="fa-brands fa-whatsapp"></i></a>

        </article>
    )
}

export default Card