import styles from './SignupForm.module.scss';

import { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';

enum Status {
    NotSent = 1,
    Sending,
    Sent,
    SentVerified,
    ServerError,
    InvalidEmail,
}

export default function SignupForm() {
    const router = useRouter();
    let [ status, setStatus ] = useState(Status.NotSent);
    let [ email, setEmail ] = useState('');
    let [ referral, setReferral ] = useState('');

    useEffect(() => {
        if (Cookies.get("referral") !== undefined) {
            setStatus(Status.SentVerified);
            setReferral(Cookies.get("referral"));
        }
    }, []);

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (email === '') {
            setStatus(Status.InvalidEmail);
            return;
        }

        setStatus(Status.Sending);

        axios.post('/api/send', { email, referrer: router.query.ref }).then((response) => {
            if (response.status === 200) {
                if (response.data.verified) setStatus(Status.SentVerified);
                else setStatus(Status.Sent);
                setReferral(response.data.referral);
                Cookies.set("referral", response.data.referral, { expires: 365 });
            } else if (response.status === 400) setStatus(Status.InvalidEmail);
            else setStatus(Status.ServerError);
        }).catch(() => setStatus(Status.ServerError));
    }

    if (status === Status.Sending || status === Status.Sent || status === Status.SentVerified) {
        if (status === Status.Sending) return <div className={styles.form}><h4>Loading... This might take a second.</h4></div>;
        else return (
            <div className={styles.form}>
                <h1>Thanks! We'll keep you up to date.</h1>
                { status === Status.SentVerified ? (
                    <h4>Your referral link is <a href={`https://revolt.chat/?ref=${referral}`}>https://revolt.chat/?ref={referral}</a></h4>
                ) : (
                    <h4>Please check your inbox to verify your email</h4>
                )}
            </div>
        );
    } else return (
        <div className={styles.form}>
            <div className={styles.text}>
                <h1>Sign up for the waiting list!</h1>
                <p>Be the first amongst others to get access to Revolt.</p>
            </div>
            <form className={styles.signup} onSubmit={submit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                />
                <button>Join Waiting List</button>
            </form>
            { status === Status.ServerError && <h4>An error has occured, please try again later.</h4> }
            { status === Status.InvalidEmail && <h4>Please provide a valid email.</h4> }
        </div>
    );
}
