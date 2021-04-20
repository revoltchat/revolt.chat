import Link from 'next/link';
import { URLs } from '../urls';
import styles from './Navbar.module.scss';
import { Globe } from '@styled-icons/feather';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a>
                    <img src="/logo.svg" draggable={false} />
                </a>
            </Link>
            <div className={styles.actions}>
                <a href={URLs.Roadmap} target="_blank">Roadmap</a>
                {/* <a>Developers</a> */}
                {/* <a>Download</a> */}
                {/*<a><Globe size={28} strokeWidth={2} /></a>*/}
            </div>
        </div>
    )
}
