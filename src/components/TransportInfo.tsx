'use client';

import { useTranslations } from 'next-intl';
import { Bus, Car } from 'lucide-react';
import styles from './TransportInfo.module.css';

export default function TransportInfo() {
    const t = useTranslations('VisitPage');

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t('transport_title')}</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Bus size={40} />
                    </div>
                    <p>{t('transport_bus')}</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Car size={40} />
                    </div>
                    <p>{t('transport_car')}</p>
                </div>
            </div>
        </section>
    );
}
