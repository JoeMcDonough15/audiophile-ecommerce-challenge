import React from "react";
import "./thin-rule.sass";

const ThinRule = (props) => {
  const { customStyle } = props;
  return <hr className={`thin-rule ${customStyle}`}></hr>;
};

export default ThinRule;
