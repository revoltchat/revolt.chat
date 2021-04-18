import classNames from 'classnames';
import { Edit } from '@styled-icons/feather';
import styles from './JoinLinks.module.scss';

interface Props {
    contrast?: boolean
}

export function JoinLinks(props: Props) {
    return (
        <div className={styles.actions}>
            <a className={classNames("button", "red", props.contrast && "border")} href="https://docs.google.com/forms/d/e/1FAIpQLSfFqBG5_0F6-2h_-aljV_i3v-QRLhYYm1_1-zSC77ZMx0LX_w/viewform">
                <Edit size={24} strokeWidth={2}/> Apply for the Beta
            </a>
            <a className="button" href="https://app.revolt.chat">
                Open Web app
            </a>
        </div>
    )
}