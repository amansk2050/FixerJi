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

export default function Home() {
  return (
    <main className="bg-black">
      <section className="w-full">
        <Navbar />
      </section>

      <div className="mx-auto container md:px-14">
        <section className="w-full min-h-screen">
          <Hero />
        </section>

        <section className="min-h-screen mx-auto w-full">
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
  );
}
