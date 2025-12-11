'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Shirt, Heart } from 'lucide-react';
import styles from './WhoWeAre.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
    const t = useTranslations('WhoWeAre');
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Text Animation
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Cards Animation
            gsap.fromTo(
                (cardsRef.current as any).children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 ref={titleRef} className={styles.title}>{t('title')}</h2>
                    <p ref={textRef} className={styles.description}>{t('description')}</p>
                </div>

                <div ref={cardsRef} className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Users size={40} />
                        </div>
                        <h3>{t('stat1')}</h3>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Shirt size={40} />
                        </div>
                        <h3>{t('stat2')}</h3>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Heart size={40} />
                        </div>
                        <h3>{t('stat3')}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
