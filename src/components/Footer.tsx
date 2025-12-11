import styles from './Footer.module.css';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Navigation');

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>Salasaca</h3>
                        <p>Turismo Comunitario y Cultural</p>
                    </div>
                    <div className={styles.column}>
                        <h4>Enlaces</h4>
                        <ul>
                            <li><Link href="/cultura">{t('culture')}</Link></li>
                            <li><Link href="/gastronomia">{t('gastronomy')}</Link></li>
                            <li><Link href="/artesanias">{t('crafts')}</Link></li>
                            <li><Link href="/experiencias">{t('experiences')}</Link></li>
                            <li><Link href="/visita">{t('visit')}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Contacto</h4>
                        <p>Salasaca, Tungurahua, Ecuador</p>
                        <p>info@salasaca-turismo.com</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Comunidad Salasaca. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
