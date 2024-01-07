import React from "react";
import InventoryList from "../InventoryList/InventoryList";

const InTheBox = (props) => {
  return (
    <div className="in-the-box">
      {" "}
      <h5 className="black-text">In the box</h5>
      <InventoryList {...props} />
    </div>
  );
};

export default InTheBox;
