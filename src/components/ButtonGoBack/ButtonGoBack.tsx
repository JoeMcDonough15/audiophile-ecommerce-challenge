import { useNavigate } from "react-router-dom";

const ButtonGoBack = () => {
  const navigate = useNavigate();
  return (
    <button
      className="button-text-only"
      onClick={() => {
        navigate(-1);
      }}
    >
      <span>go back</span>
    </button>
  );
};

export default ButtonGoBack;
