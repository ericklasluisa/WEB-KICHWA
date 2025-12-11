'use client';

import { useTranslations } from 'next-intl';
import { Shirt, User } from 'lucide-react';
import styles from './Clothing.module.css';

export default function Clothing() {
    const t = useTranslations('CulturePage');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('clothing_title')}</h2>
                    <p className={styles.description}>{t('clothing_desc')}</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <User size={64} />
                        </div>
                        <h3>{t('clothing_men').split(':')[0]}</h3>
                        <p>{t('clothing_men').split(':')[1]}</p>
                        <div className={styles.details}>
                            <ul>
                                <li>Poncho Negro</li>
                                <li>Sombrero Blanco</li>
                                <li>Pantalón Blanco</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Shirt size={64} />
                        </div>
                        <h3>{t('clothing_women').split(':')[0]}</h3>
                        <p>{t('clothing_women').split(':')[1]}</p>
                        <div className={styles.details}>
                            <ul>
                                <li>Anaco Negro</li>
                                <li>Fachalina</li>
                                <li>Collares</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
