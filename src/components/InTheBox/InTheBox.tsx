import InventoryList from "../InventoryList/InventoryList";
import "./in-the-box.sass";

interface Props {
  productIncludes: { quantity: number; item: string }[];
}

const InTheBox = ({ productIncludes }: Props): JSX.Element => {
  return (
    <div className="in-the-box">
      {" "}
      <h5 className="in-the-box-header black-text">In the box</h5>
      <InventoryList productIncludes={productIncludes} />
    </div>
  );
};

export default InTheBox;
