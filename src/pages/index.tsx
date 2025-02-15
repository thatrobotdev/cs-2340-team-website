import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Cards from "@/components/Cards";
import BackImg from "@/components/BackImg";

export default function Home() {
  const members = [
    {
      name: "Palash Patel",
      imageSrc: "/cs-2340-team-website/avatars/palashpatel.jpg",
      role: "Scrum Master",
      devRole: "Front End Developer",
      description:
        "Hello! My name is Palash Patel. I am a 1st year " +
        "computer science student and have taken the role of scrum master " +
        "and front end developer for this project. ",
      linkedin: "palash-patel-1b001a210",
    },
    {
      name: "Aryamann Sheoran",
      imageSrc: "/cs-2340-team-website/avatars/aryamannsheoran.png",
      role: "Product Owner",
      devRole: "Full Stack Developer",
      description:
        "As the Product Owner, I ensured that we had key tasks divided " +
        "and achieved by self imposed deadllines and also kept up " +
        "steady communication with our client TA. I was also " +
        "a Full Stack Developer, ensuring that the architecture " +
        "was leveraged properly during development and " +
        "data traveled between the client facing features, the " +
        "views and the database smoothly.",
      github: "aryamannsheoran",
      linkedin: "aryamannsheoran",
    },
    {
      name: "James Kerrane",
      imageSrc: "/cs-2340-team-website/avatars/jameskerrane.jpg",
      role: "Developer",
      devRole: "Front End Developer",
      github: "thatrobotdev",
      linkedin: "jameskerrane",
      twitter: "jameskerrane",
    },
    {
      name: "Michael Wittland Jr.",
      imageSrc: "/cs-2340-team-website/avatars/Micheal.png",
      role: "Developer",
      devRole: "Back-End Developer",
      description:
        "Hello! My name is Michael Wittland. I am a 2nd year " +
        "CS student working on backend development for this project.",
      linkedin: "michael-wittland-323081295/",
    },
    {
      name: "Shane Hanley",
      imageSrc: "https://placehold.co/100",
      role: "Developer",
      devRole: "Back-End Developer",
      description:
        "Hey! My name is Shane Hanley. I am a second year " +
        "computer science student at Georgia Tech and have taken on the " +
        "role of backend developer for this project. ",
    },
    {
      name: "Emmanuel Munoz",
      imageSrc: "/cs-2340-team-website/avatars/emmanuelmunoz.png",
      role: "Mentor",
      description:
        "As the Project Client, I, Emmanuel established the requirements and expectations for Project 1. Once the team accomplished all the required User Stories, I proposed additional features to be implemented by the team. I provide feedback on their project from the visual style as well as the functional aspect of their site. ",
    },
  ];

  return (
    <>
      <Head>
        <title>CS 2340 Team 4</title>
        <meta
          name="description"
          content="The team website for CS 2340 Team 4"
        />
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
