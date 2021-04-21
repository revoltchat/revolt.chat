import Link from 'next/link';
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
                <Link href="/roadmap">
                    <a>Roadmap</a>
                </Link>
                {/* <a>Developers</a> */}
                {/* <a>Download</a> */}
                {/*<a><Globe size={28} strokeWidth={2} /></a>*/}
            </div>
        </div>
    )
}
