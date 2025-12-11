'use client';

import { useTranslations } from 'next-intl';
import { Scissors } from 'lucide-react';
import styles from './CraftsGallery.module.css';

export default function CraftsGallery() {
    const t = useTranslations('CraftsPage');

    const crafts = [
        {
            id: 'craft1',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKaY_rkxHLXsqKR6aaJjvnO5wYeAvv2MVS1nSwZv8fpd_RT01TOl2SEw04nN5HByj8IdmwlJkOKo8XZHjjwP8oQc1B38Pxnz0L_s_lAH1gkctFXMFtr4usjw9jaNn89pVTj9HqJ-dqe24/s640/una-ruta-para-el-conocimiento-milenario-etnico-20170310084703-f49431b091c6ee58c7d3805d03e08103.jpg',
            alt: 'Tapices Salasaca'
        },
        {
            id: 'craft2',
            image: 'https://img.goraymi.com/2018/04/17/024b63dc0c13abd271f5de436e0758c0_xl.jpg',
            alt: 'Ponchos y Chalinas'
        },
        {
            id: 'craft3',
            image: 'https://www.pimkay.com/wp-content/uploads/2021/10/Shigra-Etsa-Montana.jpg',
            alt: 'Shigras y Bolsos'
        },
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t('gallery_title')}</h2>
            <div className={styles.grid}>
                {crafts.map((craft) => (
                    <div key={craft.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={craft.image} alt={craft.alt} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h3>{t(`${craft.id}_title`)}</h3>
                            <p>{t(`${craft.id}_desc`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
