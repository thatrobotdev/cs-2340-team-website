import Link from "next/link";
import { Stack } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <header className="pb-3 mb-5 border-bottom">
      <Stack direction="horizontal" gap={3}>
        <div>
          <h2>
            <Link
              href="/"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <span>CS 2340 Team 4</span>
            </Link>
          </h2>
        </div>
        <div>
          <Link href="/projects" className="primary">
            Projects
          </Link>
        </div>
        <div className="ms-auto">
          <a
            href="https://github.com/thatrobotdev/cs-2340-team-website"
            target="_blank"
            rel="noopener"
          >
            View on GitHub
          </a>
        </div>
      </Stack>
    </header>
  );
};

export default Header;
