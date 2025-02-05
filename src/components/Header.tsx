import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="px-3 sticky-header" style={navbarStyle}>
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand>
          <Link href="/" className="text-light fw-bold text-decoration-none">
            CS 2340 Team 4
          </Link>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        {/* Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            {/* Inline Links */}
            <Nav.Item className="d-flex gap-3">
              <Link href="/projects" className="nav-link text-light">
                About
              </Link>
              <Link href="/projects" className="nav-link text-light">
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

// Inline Styles
const navbarStyle: React.CSSProperties = {
  backgroundColor: "rgba(34, 34, 34, 0.9)",
  backdropFilter: "blur(10px)",
  padding: "1rem",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
};

const githubLinkStyle: React.CSSProperties = {
  fontWeight: "bold",
  border: "2px solid #6A8EAE",
  padding: "6px 12px",
  borderRadius: "5px",
  transition: "all 0.3s ease-in-out",
  color: "#6A8EAE",
  textDecoration: "none",
  cursor: "pointer",
};

export default Header;