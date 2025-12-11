'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';
import styles from './Timeline.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
    const t = useTranslations('CulturePage');
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const eventsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Line Animation
            gsap.fromTo(
                lineRef.current,
                { height: 0 },
                {
                    height: '100%',
                    duration: 1.5,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        end: 'bottom 80%',
                        scrub: 1,
                    },
                }
            );

            // Events Animation
            const events = (eventsRef.current as any).children;
            Array.from(events).forEach((event: any, index) => {
                gsap.fromTo(
                    event,
                    { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: event,
                            start: 'top 80%',
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const events = [
        { id: 'event1', date: t('event1_date') },
        { id: 'event2', date: t('event2_date') },
        { id: 'event3', date: t('event3_date') },
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            <h2 className={styles.title}>{t('timeline_title')}</h2>
            <div className={styles.timeline}>
                <div ref={lineRef} className={styles.line}></div>
                <div ref={eventsRef} className={styles.eventsContainer}>
                    {events.map((event, index) => (
                        <div key={event.id} className={`${styles.event} ${index % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.content}>
                                <div className={styles.date}>
                                    <Calendar size={16} />
                                    <span>{event.date}</span>
                                </div>
                                <h3>{t(`${event.id}_title`)}</h3>
                                <p>{t(`${event.id}_desc`)}</p>
                            </div>
                            <div className={styles.dot}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
