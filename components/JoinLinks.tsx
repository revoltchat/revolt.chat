import URLs from '../urls';
import classNames from 'classnames';
import { Edit } from '@styled-icons/feather';
import styles from './JoinLinks.module.scss';

interface Props {
    contrast?: boolean
}

export function JoinLinks(props: Props) {
    return (
        <div className={styles.actions}>
            <a className={classNames("button", "red", props.contrast && "border")} href={URLs.Apply}>
                <Edit size={24} strokeWidth={2}/> Apply for the Beta
            </a>
            <a className="button" href={URLs.App}>
                Open Web app
            </a>
        </div>
    )
}