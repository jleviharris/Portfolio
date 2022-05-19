import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heading">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        <h1 className="heading-name">Jonathan Harris</h1>
      </Link>

      <p className="heading-title">Software Developer</p>
    </div>
  );
};

export default Header;
