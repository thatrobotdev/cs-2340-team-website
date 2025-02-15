import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="p-3 bg-dark navbar-dark sticky-top oswald shadow-sm z-3" style={{ backdropFilter: "blur(10px)" }}>
      <Container>
        <Navbar.Brand>
          <Link href="/" className="link-light fw-bold text-decoration-none">
            CS 2340 TEAM 4
          </Link>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        {/* Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            {/* Inline Links */}
            <Nav.Item className="d-flex gap-3">
              <Link href="/#meet-our-team" className="nav-link text-light">
                Meet Our Team
              </Link>
              <Link href="/#project-navigation" className="nav-link text-light">
                Projects
              </Link>
            </Nav.Item>

            {/* GitHub Link */}
            <Nav.Item>
              <a
                href="https://github.com/thatrobotdev/cs-2340-team-website"
                target="_blank"
                rel="noopener"
                className="nav-link"
                style={githubLinkStyle}
              >
                View on GitHub
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const githubLinkStyle: React.CSSProperties = {
  fontWeight: "bold",
  border: "2px solid #FF5252",
  padding: "6px 12px",
  borderRadius: "5px",
  transition: "all 0.3s ease-in-out",
  color: "#FF5252",
  textDecoration: "none",
  cursor: "pointer",
};

export default Header;