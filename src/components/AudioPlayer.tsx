'use client';

import { useTranslations } from 'next-intl';
import { Headphones } from 'lucide-react';
import styles from './AudioPlayer.module.css';

export default function AudioPlayer() {
    const t = useTranslations('LanguagePage');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <Headphones size={48} />
                </div>
                <h2 className={styles.title}>{t('audio_title')}</h2>
                <p className={styles.description}>{t('audio_desc')}</p>
                <div className={styles.playerPlaceholder}>
                    <div className={styles.progressBar}></div>
                    <div className={styles.controls}>
                        <div className={styles.btn}></div>
                        <div className={`${styles.btn} ${styles.play}`}></div>
                        <div className={styles.btn}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
