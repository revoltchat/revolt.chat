import Head from 'next/head';
import classNames from 'classnames';

import styles from './index.module.scss';
import flex from '../components/util/flex.module.scss';

export default function Home() {
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
