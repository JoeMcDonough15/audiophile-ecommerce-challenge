import "./thin-rule.sass";

interface Props {
  customStyle: string;
}

const ThinRule = ({ customStyle }: Props): JSX.Element => {
  return <hr className={`thin-rule ${customStyle}`}></hr>;
};

export default ThinRule;
