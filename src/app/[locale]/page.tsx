import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Experiences from '@/components/Experiences';
import Gallery from '@/components/Gallery';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  return {
    title: t('title'),
    description: t('welcome'),
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Experiences />
      <Gallery />
      {/* Other sections will go here */}
    </main>
  );
}
