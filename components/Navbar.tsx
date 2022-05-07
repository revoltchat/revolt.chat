import URLs from '../urls';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a>
                    <img src="/logo.svg" draggable={false} />
                </a>
            </Link>
            <div className={styles.actions}>
                <Link href="/posts">
                    <a>
                        Blog
                    </a>
                </Link>
                <a href={URLs.ProjectTracker}>
                    Project Tracker
                </a>
                {/* <a>Developers</a> */}
                {/* <a>Download</a> */}
                {/*<a><Globe size={28} strokeWidth={2} /></a>*/}
            </div>
        </div>
    )
}
