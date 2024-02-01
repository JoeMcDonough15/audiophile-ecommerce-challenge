import React from "react";

interface Props {
  headerText: string;
}

const CheckoutSectionHeader = ({ headerText }: Props): JSX.Element => {
  return (
    <h6 className="dark-orange-text form-sub-section-header subheading">
      {headerText}
    </h6>
  );
};

export default CheckoutSectionHeader;
