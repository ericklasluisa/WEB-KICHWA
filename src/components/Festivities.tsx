'use client';

import { useTranslations } from 'next-intl';
import { Calendar } from 'lucide-react';
import styles from './Festivities.module.css';

export default function Festivities() {
    const t = useTranslations('GastronomyPage');

    const festivities = [
        { id: 'fest1', color: 'var(--color-red)' },
        { id: 'fest2', color: 'var(--color-accent-gold)' },
        { id: 'fest3', color: 'var(--color-deep-blue)' },
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t('festivities_title')}</h2>
            <div className={styles.grid}>
                {festivities.map((fest) => (
                    <div key={fest.id} className={styles.card} style={{ borderTopColor: fest.color }}>
                        <div className={styles.month}>
                            <Calendar size={20} />
                            <span>{t(`${fest.id}_month`)}</span>
                        </div>
                        <h3>{t(`${fest.id}_name`)}</h3>
                        <p>{t(`${fest.id}_desc`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
