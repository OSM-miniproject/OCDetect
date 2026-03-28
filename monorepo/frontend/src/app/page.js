import Hero from "../components/Hero";
import About from "../components/About";
import Contactus from "../components/Contactus";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import reviews from "../../data";
import Navbar from "../components/Navbar";
import "./globals.css";
import GuideConnect from "@/components/GuideConnect";
import WebcamControl from "@/components/WebcamControl";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="testimonials">
        <Testimonials reviews={reviews} />
        </section> */}

      <section id="faqs">
        <Faqs />
      </section>

      <section id="contactus">
        <Contactus />
      </section>

        <section id="guideconnect">
          <GuideConnect />
        </section>
    </div>
  );
}
