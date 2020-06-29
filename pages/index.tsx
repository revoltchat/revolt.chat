import Head from 'next/head';
import classNames from 'classnames';

import styles from './index.module.scss';
import flex from '../components/util/flex.module.scss';

import { useState, FormEvent } from 'react';
import axios from 'axios';

export default function Home() {
    let [ sent, setSent ] = useState(false);
    let [ email, setEmail ] = useState('');

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSent(true);

        axios.post('/api/send', { email });
    }

    return (
        <div>
            <Head>
                <title>Revolt</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main>
                <div className={styles.hero}>
                    <div className={styles.nav}>
                        <img className={styles.logo} src="/logo.svg" />
                    </div>
                    <div className={classNames(styles.body, flex.columns)}>
                        <div className={classNames(flex.column, styles.heroText)}>
                            <div className={styles.primary}>
                                <h2>Don't bother with chat apps that don't respect your privacy.</h2>
                                <h3>Communication is critical.<br/>Privacy is essential.</h3>
                                {
                                    sent ? <h4>Thanks! We'll keep you up to date.</h4> :
                                    <form className={styles.signup} onSubmit={submit}>
                                        <input
                                            placeholder="Enter enter your email."
                                            value={email}
                                            onChange={e => setEmail(e.currentTarget.value)}
                                        />
                                        <button>Join waiting list.</button>
                                    </form>
                                }
                            </div>
                        </div>
                        <div className={classNames(flex.column, styles.heroImage)}>
                            <div className={styles.container}>
                                <img src="/concept_inner.svg" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroFix}></div>
                </div>
            </main>
        </div>
    );
}
