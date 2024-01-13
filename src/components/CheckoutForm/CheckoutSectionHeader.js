import React from "react";

const CheckoutSectionHeader = (props) => {
  const { headerText } = props;
  return (
    <h6 className="dark-orange-text form-sub-section-header subheading">
      {headerText}
    </h6>
  );
};

export default CheckoutSectionHeader;
