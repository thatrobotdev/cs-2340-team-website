import { HeartFill } from "react-bootstrap-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient py-4 text-center">
      <hr className="mt-5 mb-4" />
      <p className="text-muted">
        Built with <a href="https://getbootstrap.com/">Bootstrap 5</a>, <a href="https://react.dev">React</a>, <a href="https://react-bootstrap.github.io/">React Bootstrap</a>, <a href="https://nextjs.org/">Next.js</a>, and <HeartFill title="heart icon" aria-label="love" color="red" /> in Atlanta, GA.
        Created and open sourced by the CS 2340 project team. Licensed MIT.
      </p>
      <div className="social-icons mt-3">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="bi bi-github text-light"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="bi bi-linkedin text-light"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="bi bi-twitter text-light"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
