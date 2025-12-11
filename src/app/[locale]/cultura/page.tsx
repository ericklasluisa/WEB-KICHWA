import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Timeline from '@/components/Timeline';
import Clothing from '@/components/Clothing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'CulturePage' });
    return {
        title: t('title'),
        description: t('history_desc').substring(0, 160),
    };
}

export default function CulturePage() {
    const t = useTranslations('CulturePage');

    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Hero-like header for the page */}
            <section style={{
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                padding: '6rem 1.5rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{t('title')}</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    {t('history_desc')}
                </p>
            </section>

            <Timeline />
            <Clothing />
        </main>
    );
}
