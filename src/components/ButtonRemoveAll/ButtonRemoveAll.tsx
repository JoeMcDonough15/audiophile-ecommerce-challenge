interface Props {
  onClick: () => void;
}

const ButtonRemoveAll = ({ onClick }: Props) => {
  return (
    <button className="button-text-only with-underline" onClick={onClick}>
      <span className="button-text">remove all</span>
    </button>
  );
};

export default ButtonRemoveAll;
