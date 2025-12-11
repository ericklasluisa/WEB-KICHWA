import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import MapSection from '@/components/MapSection';
import TransportInfo from '@/components/TransportInfo';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'VisitPage' });
    return {
        title: t('title'),
        description: t('intro').substring(0, 160),
    };
}

export default function VisitPage() {
    const t = useTranslations('VisitPage');

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

            <MapSection />
            <TransportInfo />
            <ContactForm />
        </main>
    );
}
