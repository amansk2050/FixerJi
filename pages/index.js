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
    <main className="bg-gradient-to-r from-[#000000] to-[#434343]">
      <section className="w-full">
        <Navbar />
      </section>

      <div className="mx-auto container md:px-14">
        {/* <div className="h-screen"> */}
        <section className="w-full h-screen">
          <Hero />
        </section>
        {/* </div> */}
        <section className="h-screen mx-auto w-full">
          <Work />
        </section>
        <section className="h-screen w-full">
          <Client />
        </section>
        <section className="h-screen w-full">
          <About />
        </section>
        <section className="h-screen mx-auto w-3/5">
          <Contact />
        </section>
      </div>
      <footer>
        <Footer className="h-[100px] w-full" />
      </footer>
    </main>
  );
}
