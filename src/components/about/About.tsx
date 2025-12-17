import styles from "./About.module.css"
import presentation from "/public/presentation.mp4"

function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.about__container}>

                <div className={styles.about__video}>
                    <iframe src={presentation}></iframe>
                </div>
                <div className={styles.about__text}>
                    <h2 className={styles.about__title}>Sobre nós</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad, obcaecati incidunt eius veniam magni quae, quas consectetur repellendus reprehenderit, vel officia cum fugiat eveniet libero neque corporis ipsum. Iure.</p>
                    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta, aspernatur inventore optio, dignissimos dolores repellat voluptate, nobis error nemo maxime dolore explicabo. Eveniet consequuntur voluptatum vero ab aut neque.</p>

                </div>
            </div>
        </section>
    )
}

export default About