'use client';

import { useTranslations } from 'next-intl';
import styles from './BookingInfo.module.css';

export default function BookingInfo() {
    const t = useTranslations('ExperiencesPage');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('booking_title')}</h2>
                <p className={styles.description}>{t('booking_desc')}</p>
                <button className={styles.button}>
                    {t('contact_btn')}
                </button>
            </div>
        </section>
    );
}
