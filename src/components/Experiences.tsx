'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mountain, Scissors, Utensils, Sparkles } from 'lucide-react';
import styles from './Experiences.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
    const t = useTranslations('Experiences');
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Cards Stagger Animation
            gsap.fromTo(
                (cardsRef.current as any).children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const experiences = [
        {
            id: 'card1',
            icon: <Mountain size={32} />,
            color: 'var(--color-accent-green)',
            image: 'https://ef40de1a.delivery.rocketcdn.me/wp-content/uploads/2025/08/El-Pailon-del-Diablo-Banos-Tungurahua-Ministerio-de-Turismo-de-Ecuador.jpg.webp',
            alt: 'Senderismo'
        },
        {
            id: 'card2',
            icon: <Scissors size={32} />,
            color: 'var(--color-deep-blue)',
            image: 'https://ef40de1a.delivery.rocketcdn.me/wp-content/uploads/elementor/thumbs/Comunidad-Salasaca-Ministerio-de-Turismo-del-Ecuador-ragfwn8olk2544j4r77z210m75nj0a6mjfuac1c5q8.jpg',
            alt: 'Tejido'
        },
        {
            id: 'card3',
            icon: <Utensils size={32} />,
            color: 'var(--color-red)',
            image: 'https://ef40de1a.delivery.rocketcdn.me/wp-content/uploads/2025/05/Llapingachos-Ministerio-de-Turismo-del-Ecuador.jpg',
            alt: 'Gastronomía'
        },
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div ref={headerRef} className={styles.header}>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div ref={cardsRef} className={styles.grid}>
                    {experiences.map((exp) => (
                        <div key={exp.id} className={styles.card} style={{ '--accent-color': exp.color } as any}>
                            <div className={styles.imageContainer}>
                                <img src={exp.image} alt={exp.alt} className={styles.image} />
                                <div className={styles.overlay}></div>
                                <div className={styles.iconWrapper}>
                                    {exp.icon}
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3>{t(`${exp.id}_title`)}</h3>
                                <p>{t(`${exp.id}_desc`)}</p>
                                <button className={styles.learnMoreBtn}>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
