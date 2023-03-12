import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./termsOfService.scss";

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="terms-of-service">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" /> GO BACK
      </button>

      <h2 className="terms-of-service__title">Terms of Service</h2>

      <p className="terms-of-service__description">
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our
        relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
      </p>

      <h3 className="terms-of-service__subtitle">The use of this website is subject to the following terms of use:</h3>

      <ul className="terms-of-service__list">
        <li>Our website doest`t use cookies.</li>
        <li>
          Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information
          available through this website meet your specific requirements.
        </li>
        <li>
Reproduction is prohibited other than in
          accordance with the copyright notice, which forms part of these terms and conditions.
        </li>
        <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
        <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
        <li>
          From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We
          have no responsibility for the content of the linked website(s).
        </li>
        <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of Ukraine.</li>
      </ul>

      <h3 className="terms-of-service__subtitle">Changes to This Agreement</h3>

      <p className="terms-of-service__description">
        We reserve the right, at our sole discretion, to modify or replace these Terms of Service by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your
        acceptance of the new Terms of Service.
      </p>

      <h3 className="terms-of-service__subtitle">Contact Us</h3>

      <p className="terms-of-service__description">
        If you have any questions about these Terms of Service, please contact us at {" "}
        <a href="goaman604@gmail.com" className="terms-of-service__link">
          goaman604@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
