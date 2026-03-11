import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhotoSection } from "@/components/PhotoSection";
import { About } from "@/components/About";
import { Listen } from "@/components/Listen";
import { Services } from "@/components/Services";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PhotoSection
          src="/images/crowd-interaction.jpg"
          alt="Sport Mode connecting with the crowd at a festival"
          credit="T. Falk Chalmers"
        />
        <About />
        <PhotoSection
          src="/images/arms-open.jpg"
          alt="Sport Mode arms open behind the decks"
          credit="T. Falk Chalmers"
        />
        <Listen />
        <Services />
        <PhotoSection
          src="/images/private-event-2.jpg"
          alt="Sport Mode DJing a private event"
          credit="Kyle Joinson"
        />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
