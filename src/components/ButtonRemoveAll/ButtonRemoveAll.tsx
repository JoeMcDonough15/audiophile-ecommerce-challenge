interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonRemoveAll = ({ onClick }: Props) => {
  return (
    <button className="button-text-only with-underline" onClick={onClick}>
      <span className="button-text">remove all</span>
    </button>
  );
};

export default ButtonRemoveAll;
