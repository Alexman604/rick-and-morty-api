import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="/privacy-policy" className="footer__link">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="footer__link">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
