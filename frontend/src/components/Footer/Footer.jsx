import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" >
        <ul>
            <li><a target="_blank" href="https://github.com/jleviharris">GitHub <i className="fa-brands fa-github"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/dev-jonathan-harris/">LinkedIn <i className="fa-brands fa-linkedin"></i></a></li>
            <li><a target="_blank" href="mailto:devjleviharris@gmail.com">Email <i className="fa-solid fa-envelope"></i></a></li>
        </ul>
</footer>
  );
};

export default Footer;
