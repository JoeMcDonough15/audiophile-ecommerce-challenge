interface Props {
  className: string;
}

const NewProductIntro = ({ className }: Props) => {
  return <p className={`overline ${className}`}>New Product</p>;
};

export default NewProductIntro;
