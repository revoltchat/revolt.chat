import { Edit } from '@styled-icons/feather';
import styles from './JoinLinks.module.scss';

export function JoinLinks() {
    return (
        <div className={styles.actions}>
            <a className="button red">
                <Edit size={24} strokeWidth={2}/> Apply for Beta
            </a>
            <a className="button">
                Open Web app
            </a>
        </div>
    )
}