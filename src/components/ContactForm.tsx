'use client';

import { useTranslations } from 'next-intl';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const t = useTranslations('VisitPage');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('contact_title')}</h2>
                <p className={styles.description}>{t('contact_desc')}</p>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <label htmlFor="name">{t('form_name')}</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="email">{t('form_email')}</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="message">{t('form_message')}</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                    </div>

                    <button type="submit" className={styles.button}>{t('form_send')}</button>
                </form>
            </div>
        </section>
    );
}
