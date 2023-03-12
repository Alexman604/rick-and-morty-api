import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./policies.scss";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="policies">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" /> GO BACK
      </button>

      <h2 className="policies__title">Privacy Policy</h2>
      <p className="policies__description">
        This Privacy Policy describes how we collect, use, and disclose user data when you use our web application. By using our web application, you agree to the terms of this Privacy Policy.
      </p>
      <h3 className="policies__subtitle">Information We Collect</h3>
      <p className="policies__description">
        We collect your name and email address when you use our web application. This information is collected through Google OAuth, and we use it to display your name on the page as a greeting.
      </p>
      <h3 className="policies__subtitle">How We Use Your Information</h3>
      <p className="policies__description">We only use your name and email address to display your name on the page as a greeting. We do not share your information with any third-party services or advertisers.</p>
      <h3 className="policies__subtitle">How We Protect Your Information</h3>
      <p className="policies__description">
        We store your information only on your own device during your connected session, and we do not share it with any third-party services. We take reasonable measures to protect your information against unauthorized
        access or disclosure.
      </p>
      <h3 className="policies__subtitle">Your Rights</h3>
      <p className="policies__description">
        You have the right to request access to the personal information we have collected about you, and to request that we correct, amend, or delete that information. You can contact us at{" "}
        <a className="policies__link" href="mailto:goaman604@gmail.com">
          goaman604@gmail.com
        </a>{" "}
        to exercise these rights.
      </p>
      <h3 className="policies__subtitle">Changes to this Privacy Policy</h3>
      <p className="policies__description">
        We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website.
      </p>
      <h3 className="policies__subtitle">Contact Us</h3>
      <p className="policies__description">
        If you have any questions or concerns about this Privacy Policy or our data practices, you can contact us at
        <a className="policies__link" href="mailto:goaman604@gmail.com">
          goaman604@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
