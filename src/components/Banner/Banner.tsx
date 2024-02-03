import ThinRule from "../ThinRule/ThinRule";
import "./banner.sass";

interface Props {
  bannerText?: string;
}

const Banner = ({ bannerText }: Props): JSX.Element => {
  return (
    <div className="banner">
      {bannerText && (
        <div className="banner-contents-container main-container">
          <ThinRule customStyle="thin-rule-header" />
          <h2 className="banner-text">{bannerText}</h2>
        </div>
      )}
    </div>
  );
};

export default Banner;
