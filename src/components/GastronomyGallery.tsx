'use client';

import { useTranslations } from 'next-intl';
import { Utensils } from 'lucide-react';
import styles from './GastronomyGallery.module.css';

export default function GastronomyGallery() {
    const t = useTranslations('GastronomyPage');

    const dishes = [
        {
            id: 'dish1',
            image: 'https://img.goraymi.com/2017/12/22/57d2fa0f3637204ff7721fc82247f142_xl.jpg',
            alt: 'Tzawar Mishki'
        },
        {
            id: 'dish2',
            image: 'https://tinasca.wordpress.com/wp-content/uploads/2013/05/tortillas.jpg',
            alt: 'Tortillas de Maíz'
        },
        {
            id: 'dish3',
            image: 'https://img.eloriente.com/pics/1280x960/44b37559ad630376537a407c05ee645ac3ea24d7.png',
            alt: 'Cuy Asado'
        },
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t('dishes_title')}</h2>
            <div className={styles.grid}>
                {dishes.map((dish) => (
                    <div key={dish.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={dish.image} alt={dish.alt} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h3>{t(`${dish.id}_title`)}</h3>
                            <p>{t(`${dish.id}_desc`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
