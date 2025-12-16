import styles from './Footer.module.css'
import wave from "/public/wave.svg"

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={wave} alt="wave" className={styles.footer__wave} />

            <div className={styles.footer__content}>
                <p>&copy; Todos os direitos reservados.</p>
                <h3>My logo</h3>
                <div className={styles.footer__social}>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
