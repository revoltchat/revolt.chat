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
            <a className={classNames("button", "red", props.contrast && "border")} href={URLs.PublicBeta}>
                <Edit size={24} strokeWidth={2}/> Join Public Beta
            </a>
            <a className="button" href={URLs.App}>
                Open web app
            </a>
            <a className="button" href="/desktop">
                Download desktop app
            </a>
        </div>
    )
}