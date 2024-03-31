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
      className="button-expand-order"
      onClick={() => {
        setViewExpanded(!viewExpanded);
      }}
    >
      <span>{buttonExpandText}</span>
    </button>
  );
};

export default ButtonExpandOrderSummary;
