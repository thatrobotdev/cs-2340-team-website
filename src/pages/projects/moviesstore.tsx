import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackImg from "@/components/BackImg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects - moviesstore</title>
        <meta name="description" content="The team website for CS 2340 Team 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" className="py-4 px-3 mx-auto">
        <BackImg />
        <Header />

        <h1>moviesstore</h1>

        <Footer />
      </Container>
    </>
  );
}
