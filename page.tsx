import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <BookingForm />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
