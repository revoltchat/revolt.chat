import styles from './Navbar.module.scss';
import { Globe } from '@styled-icons/feather';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src="/logo.svg" />
            <div className={styles.actions}>
                <a>Blog</a>
                <a>Developers</a>
                <a>Download</a>
                <a><Globe size={16} strokeWidth={2} /></a>
            </div>
        </div>
    )
}
