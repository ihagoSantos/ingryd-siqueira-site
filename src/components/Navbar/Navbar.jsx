import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#">INÍCIO</a></li>
                <li><a href="">SOBRE MIM</a></li>
                <li><a href="">SERVIÇOS</a></li>
                <li><a href="">DEPOIMENTOS</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>
        </nav>
    )
}