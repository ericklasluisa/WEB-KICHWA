'use client';

import { useTranslations } from 'next-intl';
import { Mountain, Scissors, Sparkles, Clock } from 'lucide-react';
import styles from './ActivitiesList.module.css';

export default function ActivitiesList() {
    const t = useTranslations('ExperiencesPage');

    const activities = [
        { id: 'act1', icon: <Mountain size={40} />, color: 'var(--color-accent-green)' },
        { id: 'act2', icon: <Scissors size={40} />, color: 'var(--color-deep-blue)' },
        { id: 'act3', icon: <Sparkles size={40} />, color: 'var(--color-red)' },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {activities.map((act) => (
                    <div key={act.id} className={styles.card}>
                        <div className={styles.iconWrapper} style={{ color: act.color, backgroundColor: `${act.color}15` }}>
                            {act.icon}
                        </div>
                        <div className={styles.content}>
                            <h3>{t(`${act.id}_title`)}</h3>
                            <p className={styles.description}>{t(`${act.id}_desc`)}</p>
                            <div className={styles.meta}>
                                <Clock size={16} />
                                <span>{t(`${act.id}_duration`)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
