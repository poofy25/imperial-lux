import {useTranslations} from 'next-intl';

import HeroSection from '@/components/HeroSection/Hero';
 
export default function Index() {
  const t = useTranslations('Index');
  return (
    <HeroSection/>
  );
}