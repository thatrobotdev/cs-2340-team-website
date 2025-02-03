import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>CS 2340 Team 4</title>
        <meta name="description" content="The team website for CS 2340 Team 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" className="py-4 px-3">
        <Header />
          <h1>Crafting <mark className="bg-neon-yellow">fun</mark>, <mark className="bg-neon-magenta">innovative</mark>, and <mark className="bg-neon-cyan">seamless</mark> full-stack web experiences.</h1>
        <HomePage />
        <Footer />
      </Container>
    </>
  );
}
