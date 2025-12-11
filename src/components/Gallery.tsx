'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Gallery.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const t = useTranslations('Gallery');
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
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

            // Horizontal Scroll Animation
            const slider = sliderRef.current as any;
            const totalWidth = slider.scrollWidth;
            const windowWidth = window.innerWidth;

            if (totalWidth > windowWidth) {
                gsap.to(slider, {
                    x: () => -(totalWidth - windowWidth),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${totalWidth - windowWidth}`,
                        invalidateOnRefresh: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        {
            id: 'img1',
            image: 'https://lalineadefuego.info/wp-content/uploads/2020/03/salasaca_foto_etnias_mundo.png',
            alt: 'Mujeres Salasaca'
        },
        {
            id: 'img2',
            image: 'https://i.pinimg.com/736x/3a/f5/bc/3af5bcfbf60c511877ba77465854195f.jpg',
            alt: 'Hombres Salasaca'
        },
        {
            id: 'img3',
            image: 'https://pbs.twimg.com/media/EMFdP8YX0AECEET.jpg',
            alt: 'Tejidos Salasaca'
        },
        {
            id: 'img4',
            image: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/CI2NF64YGVHEHKHQAPKSCKH5JM.jpg',
            alt: 'Inti Raymi'
        },
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.header}>
                <h2 ref={titleRef} className={styles.title}>{t('title')}</h2>
            </div>

            <div className={styles.sliderContainer}>
                <div ref={sliderRef} className={styles.slider}>
                    {images.map((img) => (
                        <div key={img.id} className={styles.slide}>
                            <div
                                className={styles.imageContainer}
                                role="img"
                                aria-label={t(`${img.id}_desc`)}
                            >
                                <img src={img.image} alt={img.alt} className={styles.image} />
                            </div>
                            <div className={styles.caption}>
                                <p>{t(`${img.id}_desc`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
