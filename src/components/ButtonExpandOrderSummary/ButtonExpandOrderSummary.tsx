interface Props {
  setViewExpanded: (arg0: boolean) => void;
  viewExpanded: boolean;
  buttonExpandText: string;
}
const ButtonExpandOrderSummary = ({
  setViewExpanded,
  buttonExpandText,
  viewExpanded,
}: Props) => {
  return (
    <button
      className="button-text-only"
      onClick={() => {
        setViewExpanded(!viewExpanded);
      }}
    >
      <span className="button-text">{buttonExpandText}</span>
    </button>
  );
};

export default ButtonExpandOrderSummary;
