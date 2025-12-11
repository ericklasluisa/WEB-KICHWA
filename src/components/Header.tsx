'use client';

import { useState, useTransition, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import styles from './Header.module.css';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('Navigation');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const switchLocale = () => {
        const nextLocale = locale === 'es' ? 'ki' : 'es';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Salasaca
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/cultura" onClick={toggleMenu}>{t('culture')}</Link></li>
                        <li><Link href="/gastronomia" onClick={toggleMenu}>{t('gastronomy')}</Link></li>
                        <li><Link href="/artesanias" onClick={toggleMenu}>{t('crafts')}</Link></li>
                        <li><Link href="/experiencias" onClick={toggleMenu}>{t('experiences')}</Link></li>
                        <li><Link href="/visita" onClick={toggleMenu}>{t('visit')}</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.langBtn}
                        onClick={switchLocale}
                        disabled={isPending}
                        aria-label="Cambiar idioma"
                    >
                        <Globe size={20} />
                        <span>{locale.toUpperCase()}</span>
                    </button>
                    <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Menú">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
