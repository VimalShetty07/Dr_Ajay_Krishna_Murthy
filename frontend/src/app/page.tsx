import {
  Header,
  Footer,
  Navigation,
  HeroSection,
  EducationSection,
  SpecializationsSection,
  ProfessionalExperience,
  ProfessionalMemberships,
  ContactSection,
  AcademicContributions
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <Header />
      
      <main className="pt-16">
        <section id="about">
          <HeroSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="specializations">
          <SpecializationsSection />
        </section>
        
        <section id="experience">
          <ProfessionalExperience />
          <ProfessionalMemberships />
          <AcademicContributions />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
