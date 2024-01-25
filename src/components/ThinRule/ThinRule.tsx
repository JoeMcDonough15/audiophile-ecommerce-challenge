import React from "react";
import "./thin-rule.sass";

interface Props {
  customStyle: string;
}

const ThinRule = ({ customStyle }: Props) => {
  return <hr className={`thin-rule ${customStyle}`}></hr>;
};

export default ThinRule;
