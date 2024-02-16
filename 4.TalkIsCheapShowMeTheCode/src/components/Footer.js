// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/ruchita-sagalgile-0a4843171/"
        target="_blank"
        title="Ruchita Sagalgile's Linkedin Profile"
      >
        Ruchita Sagalgile
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        <span>Food</span>
      </strong>
    </div>
  );
};

export default Footer;
