import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import LinkAsSvg from "../LinkAsSvg/LinkAsSvg";
import NavBar from "../NavBar/NavBar";
import CurrentYear from "../CurrentYear/CurrentYear";
import "./footer.sass";

interface SvgLinkDetails {
  stroke?: string;
  strokeWidth?: string;
  internalLink?: boolean;
  linkDestination: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  d: string;
}
interface Props {
  logo: SvgLinkDetails;
  twitter: SvgLinkDetails;
  instagram: SvgLinkDetails;
  facebook: SvgLinkDetails;
}

const Footer = ({ logo, twitter, facebook, instagram }: Props): JSX.Element => {
  return (
    <section className="footer">
      <div className="mobile-and-tablet-footer main-container">
        <div className="footer-section-one col">
          <ThinRule customStyle="thin-rule-footer" />
          <LinkAsSvg className="logo-icon" svgDetails={logo} />
          <NavBar className="footer-navigation" />
          <p className="footer-text">
            {`Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.`}
          </p>
        </div>
        <div className="footer-section-two">
          <p className="footer-text">
            Copyright <CurrentYear />. All Rights Reserved
          </p>
          <div className="social-row">
            <LinkAsSvg className="social-icon" svgDetails={facebook} />
            <LinkAsSvg className="social-icon" svgDetails={twitter} />
            <LinkAsSvg className="social-icon" svgDetails={instagram} />
          </div>
        </div>
      </div>
      <div className="desktop-footer main-container row">
        <div className="footer-section-one col">
          <ThinRule customStyle="thin-rule-footer" />
          <LinkAsSvg className="logo-icon" svgDetails={logo} />
          <p className="footer-text footer-main-text">
            {`Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.`}
          </p>
          <p className="footer-text">
            Copyright <CurrentYear />. All Rights Reserved
          </p>
        </div>
        <div className="footer-section-two col">
          <NavBar className="footer-navigation" />
          <div className="social-row">
            <LinkAsSvg className="social-icon" svgDetails={facebook} />
            <LinkAsSvg className="social-icon" svgDetails={twitter} />
            <LinkAsSvg className="social-icon" svgDetails={instagram} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
