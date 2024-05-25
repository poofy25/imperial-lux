import {useTranslations} from 'next-intl';

import HeroSection from '@/components/HeroSection/Hero';
import ServicesSection from '@/components/ServicesSection/Services'
import WorksSection from '@/components/WorksSection/Works'
import ContactsSection from '@/components/ContactsSection/Contacts'
 
export default function Index() {
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <WorksSection/>  
      <ContactsSection/>  
    </main>
  );
}