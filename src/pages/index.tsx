import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Cards from "@/components/Cards"
import BackImg from "@/components/BackImg";

export default function Home() {

  const members = [
    {
      name: "Palash Patel",
      imageSrc: "/cs-2340-team-website/avatars/palashpatel.jpg",
      role: "Scrum Master",
      description: "Hello! My name is Palash Patel. I am a 1st year " +
      "computer science student and have taken the role of scrum master " +
      "and front end developer for this project. ",
      linkedin: "palash-patel-1b001a210",
    },
    {
      name: "Aryamann Sheoran",
      imageSrc: "/cs-2340-team-website/avatars/aryamannsheoran.png",
      role: "Product Owner",
      linkedin: "aryamannsheoran",
      github: "aryamannsheoran",
    },
    {
      name: "James Kerrane",
      imageSrc: "/cs-2340-team-website/avatars/jameskerrane.jpg",
      role: "Developer",
      description: "Hello! I am a 1st year Computer Science student studying Media & Theory at Georgia Tech. Over the course of this project, I focused on building the team website and frontend development.",
      website: "https://jameskerrane.com",
      linkedin: "jameskerrane",
      github: "thatrobotdev",
      mastodon: "thatrobotdev",
      bluesky: "jameskerrane.com",
      twitter: "jameskerrane",      
    },
    {
      name: "Michael Wittland Jr.",
      role: "Developer",
      description: "Hello! My name is Michael Wittland. I am a 2nd year " +
      "CS strength working on backend development for this project.",
      linkedin: "michael-wittland-323081295/",
    },
    {
      name: "Shane Hanley",
      role: "Developer",
    },
    {
      name: "Emmanuel Munoz",
      role: "Mentor",
    },
  ];


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
        <BackImg />
        <Cards members={members} />
        <HomePage />
        <Footer />
      </Container>
    </>
  );
}
