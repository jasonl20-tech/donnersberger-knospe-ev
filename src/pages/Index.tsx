import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmailSignupSection from "@/components/EmailSignupSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EmailSignupSection />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
