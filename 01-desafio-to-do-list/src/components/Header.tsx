import styles from './Header.module.css';
import toDoLogo from '../assets/to-do-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logotipo ToDo List" />
        </header>
    )
}