import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Client from "../components/Client";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main>
        <section className="w-full h-auto">
          <Navbar />
        </section>

        <div className="mx-auto container flex  flex-col justify-center items-center md:px-14">
          <section className="min-h-screen w-full">
            <Hero />
          </section>
          <section className="h-14 w-full"></section>
          <section className="min-h-screen  w-full">
            <Work />
          </section>
          <section className="min-h-screen w-full">
            <Client />
          </section>
          <section className="min-h-screen w-full">
            <About />
          </section>
          <section className="min-h-screen mx-auto w-4/5">
            <Contact />
          </section>
        </div>
        <footer className="h-auto w-full">
          <Footer />
        </footer>
      </main>
    </>
  );
}
