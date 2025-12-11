'use client';

import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import styles from './MapSection.module.css';

export default function MapSection() {
    const t = useTranslations('VisitPage');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.title}>{t('map_title')}</h2>
                    <p className={styles.description}>{t('map_desc')}</p>
                    <div className={styles.location}>
                        <MapPin className={styles.icon} size={24} />
                        <span>Salasaca, Tungurahua, Ecuador</span>
                    </div>
                </div>
                <div className={styles.mapWrapper}>
                    <div className={styles.mapPlaceholder}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.514042899633!2d-78.58265161076216!3d-1.3215681186408457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38342cad8e803%3A0xd42cd71ffebcde8!2sSalasaca!5e0!3m2!1ses!2sec!4v1765417748439!5m2!1ses!2sec"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
