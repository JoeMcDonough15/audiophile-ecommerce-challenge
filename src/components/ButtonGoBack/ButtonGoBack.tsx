import { useHistory } from "react-router-dom";

const ButtonGoBack = () => {
  let history = useHistory();
  return (
    <button
      className="button-text-only"
      onClick={() => {
        history.goBack();
      }}
    >
      <span className="button-text">go back</span>
    </button>
  );
};

export default ButtonGoBack;
