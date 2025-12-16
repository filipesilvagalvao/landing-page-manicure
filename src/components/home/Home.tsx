import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
import styles from "./Home.module.css"
import hands from "/public/maos-femininas.png"

function Home() {
    useGSAP(() => {
        gsap.fromTo(`.${styles.home__art}`, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
        gsap.fromTo(`.${styles.home__cta}`, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })

    })
    return (
        <section className={styles.home}>
            <div className={styles.home__container}>

                <div className={styles.home__art}>
                    <img src={hands} alt="mãos femininas" className={styles.header__img} />
                </div>

                <div className={styles.home__cta}>
                    <h2 className={styles.home__title}>Cuide de você, fique linda.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci unde doloribus modi neque tenetur recusandae quod id sed, distinctio quo? Ipsa dolores praesentium quisquam autem impedit perspiciatis magnam porro facilis.</p>
                    <a href="#" className="schedule">Agendar <i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Home