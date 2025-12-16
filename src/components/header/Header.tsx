import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>

                <h1 className={styles.header__logo}>My logo</h1>

                <input type="checkbox" id="menu-toggle" className={styles.header__checkbox} />
                <label htmlFor="menu-toggle" className={styles.header__menuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <a href="#services">Serviços</a>
                    <a href="#about">Sobre</a>
                    <div className={styles.header__social}>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </nav>


            </div>
        </header>
    )
}

export default Header