'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const t = useTranslations('HomePage');
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content} ref={textRef}>
                <h1 className={styles.title}>{t('title')}</h1>
                <p className={styles.subtitle}>{t('welcome')}</p>
                <div className={styles.actions}>
                    <button className={styles.primaryBtn} onClick={() => window.location.href = '/es/visita'}>{t('cta')}</button>
                    <button className={styles.secondaryBtn} onClick={() => window.location.href = '/es/experiencias'}>{t('secondaryCta')}</button>
                </div>
            </div>
            {/* Video/Image background */}
            <div className={styles.background}>
                {/* Using a high-quality Unsplash image of an Andean landscape */}
                <img
                    src="https://ef40de1a.delivery.rocketcdn.me/wp-content/uploads/2025/08/Volcan-Tungurahua-Ministerio-de-Turismo-del-Ecuador.jpg"
                    alt="Paisaje Andino Salasaca"
                    className={styles.backgroundImage}
                />
                <div className={styles.overlay}></div>
            </div>
        </section>
    );
}
