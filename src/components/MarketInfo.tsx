'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Clock } from 'lucide-react';
import styles from './MarketInfo.module.css';

export default function MarketInfo() {
    const t = useTranslations('CraftsPage');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t('market_title')}</h2>
                    <p className={styles.description}>{t('market_desc')}</p>

                    <div className={styles.info}>
                        <div className={styles.item}>
                            <Clock size={24} className={styles.icon} />
                            <p>{t('market_hours')}</p>
                        </div>
                        <div className={styles.item}>
                            <MapPin size={24} className={styles.icon} />
                            <p>{t('market_location')}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.mapPlaceholder}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7574385319444!2d-78.58080532503428!3d-1.3213083986661618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38342c0000001%3A0x5a714dfd09331a87!2sPlaza%20del%20Arte%20de%20Salasaka!5e0!3m2!1ses!2sec!4v1765417682207!5m2!1ses!2sec"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
