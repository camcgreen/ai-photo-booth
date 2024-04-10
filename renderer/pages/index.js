import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    useEffect(() => {
        // on mount
    }, []);
    return (
        <div className={styles.wrapper}>
            <h1>Nextron Boilerplate</h1>
        </div>
    );
}
