import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SurveySection from "@/components/SurveySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SurveySection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
