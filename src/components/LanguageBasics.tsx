'use client';

import { useTranslations } from 'next-intl';
import { Volume2 } from 'lucide-react';
import styles from './LanguageBasics.module.css';

export default function LanguageBasics() {
    const t = useTranslations('LanguagePage');

    const phrases = [
        { id: 'phrase1' },
        { id: 'phrase2' },
        { id: 'phrase3' },
        { id: 'phrase4' },
        { id: 'phrase5' },
        { id: 'phrase6' },
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t('basics_title')}</h2>
            <div className={styles.grid}>
                {phrases.map((phrase) => (
                    <div key={phrase.id} className={styles.card}>
                        <div className={styles.icon}>
                            <Volume2 size={24} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.kichwa}>{t(`${phrase.id}_ki`)}</h3>
                            <p className={styles.spanish}>{t(`${phrase.id}_es`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
