import { HeartFill } from "react-bootstrap-icons";

const Footer: React.FC = () => {
  return (
    <footer>
      <hr className="mt-5 mb-4" />
      <p className="text-muted">
        Built with <a href="https://getbootstrap.com/">Bootstrap 5</a>, <a href="https://react.dev">React</a>, <a href="https://react-bootstrap.github.io/">React Bootstrap</a>, <a href="https://nextjs.org/">Next.js</a>, and <HeartFill title="heart icon" aria-label="love" color="red"/> in Atlanta, GA.
        Created and open sourced by the CS 2340 project team. Licensed MIT.
      </p>
    </footer>
  );
};

export default Footer;
