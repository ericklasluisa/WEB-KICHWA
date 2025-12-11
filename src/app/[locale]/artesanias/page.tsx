import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import CraftsGallery from '@/components/CraftsGallery';
import MarketInfo from '@/components/MarketInfo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'CraftsPage' });
    return {
        title: t('title'),
        description: t('intro').substring(0, 160),
    };
}

export default function CraftsPage() {
    const t = useTranslations('CraftsPage');

    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Hero-like header */}
            <section style={{
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                padding: '6rem 1.5rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{t('title')}</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    {t('intro')}
                </p>
            </section>

            <CraftsGallery />
            <MarketInfo />
        </main>
    );
}
