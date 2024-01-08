import React from "react";
import InventoryList from "../InventoryList/InventoryList";
import "./in-the-box.sass";

const InTheBox = (props) => {
  return (
    <div className="in-the-box">
      {" "}
      <h5 className="in-the-box-header black-text">In the box</h5>
      <InventoryList {...props} />
    </div>
  );
};

export default InTheBox;
