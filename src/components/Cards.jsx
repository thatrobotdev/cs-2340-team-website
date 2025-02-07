// Updated Cards Component
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import "@fontsource/oswald";


const Cards = ({ members }) => {
  return (
    <Container className="py-5">

      <h2 className="text-center " 
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          paddingBottom: "10px",
        }}>
        WELCOME
      </h2>
      
      <div className="openSanFont" style={{textAlign: "center", margin: "0 auto", paddingBottom:"50px", width: "75%"}}>
        Hello, team 4 reporting! This is team 4 nefkijenfunieufneiunifneiunf
        eviunrficweun ficvuew uf vcoebvf ucybeouyf vbceouwybcnouewyb'ceuybeuybc
        cuewybrcuyebwucyey bceybcureybcnu ibi in in yb8yb uyb.
      </div>

      <hr style={{width:"80%", textAlign:"center", margin: "0 auto", paddingTop: "50px",}}></hr>
      
      <div style={{ }}>
        <h2 className="text-center" 
          style={{
          fontWeight: "bold",
          fontSize: "4.5rem",
          }}>
          MEET OUR TEAM
        </h2>
        <h1
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
            color: "#FF5252",
            fontSize: "7rem",
            textAlign: "center",
            marginTop: "-20px",
          }}
              >____________________
        </h1>
      </div>
      <Row className="g-4 justify-content-center">
        {members.map((member, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Card
              className="h-100 shadow-lg card-hover"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.border = "5px solid rgba(255, 82, 82, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1.0)";
                e.currentTarget.style.border = "2px solid rgba(155, 155, 155, 0.5)";
              }}
            >
              <Card.Body className="">
                <div className="d-flex mb-3">
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name} profile`}
                    width={250}
                    height={250}
                    //border-radius={15}
                    //className="rounded-circle"
                    style={{borderRadius:"15px"}}
                  />
                </div>
                <Card.Title style={cardTitleStyle}>{member.name}</Card.Title>
                <Card.Text className="text-muted" style={cardTextStyle}>
                  {member.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </Card.Text>
                <p className="text-role fw-bold" >
                  {member.role || "Team Member"}
                </p>
                <div>
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={`https://twitter.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Inline Styles
const headingStyle = {
  color: "#FF5252",
  fontWeight: "bold",
  fontSize: "2rem",
};

const cardStyle = {
  borderRadius: "15px",
  background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
  transition: "all 0.3s ease-in-out",
  border: "2px solid rgba(155, 155, 155, 0.5)",
};

const cardHoverStyle = {
  transform: "scale(1.05)", // Slightly enlarges the card on hover
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow effect
};


const cardTitleStyle = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#FF5252",
};

const cardTextStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.5",
};

export default Cards;