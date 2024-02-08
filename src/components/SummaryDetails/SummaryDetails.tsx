import ItemRow from "../ItemRow/ItemRow";
import FeeInformation from "../FeeInformation/FeeInformation";
import Button from "../Button/Button";
import "./summary-details.sass";
import fixPrice from "../../fixPrice";
import {
  FeaturedProductContext,
  FeaturedProductObject,
  findFeaturedProduct,
} from "../App";
import { useContext } from "react";
import { ItemInCart } from "../Cart/Cart";

const SummaryDetails = (): JSX.Element => {
  // These products will be accessed from CartContext eventually

  const selectedProductSlugs = [
    "xx99-mark-two-headphones",
    "xx59-headphones",
    "yx1-earphones",
    "zx9-speaker",
    "zx7-speaker",
    "xx99-mark-one-headphones",
  ];

  const allProducts = useContext(FeaturedProductContext);

  const findSelectedProducts = (productSlugs: string[]) => {
    const selectedProducts: FeaturedProductObject[] = [];
    productSlugs.forEach((productSlug: string) => {
      const productToPush = findFeaturedProduct(allProducts, productSlug);
      if (productToPush) {
        selectedProducts.push(productToPush);
      }
    });
    return selectedProducts;
  };

  const [
    selectedProductOne,
    selectedProductTwo,
    selectedProductThree,
  ]: FeaturedProductObject[] = findSelectedProducts(selectedProductSlugs);

  // Put the products in the cart with a hard-coded quantity property and hard-coded image data

  const itemsInCart = [
    {
      quantity: 1,
      product: selectedProductOne,
      imageData: selectedProductOne.image,
    },
    {
      quantity: 2,
      product: selectedProductTwo,
      imageData: selectedProductTwo.image,
    },
    {
      quantity: 1,
      product: selectedProductThree,
      imageData: selectedProductThree.image,
    },
  ];

  const calculateSubtotal = (items: ItemInCart[]) => {
    return items.reduce((total, currentItem) => {
      return (total += currentItem.product.price * currentItem.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal(itemsInCart);
  const shipping = 50;
  return (
    <section className="form-section-two">
      <h6 className="summary-header">Summary</h6>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart) => {
          return <ItemRow key={itemInCart.product.id} itemData={itemInCart} />;
        })}
      </div>
      <div className="fees-container col">
        <FeeInformation
          key={1}
          feeName="Total"
          amountAsString={fixPrice(subtotal)}
        />
        <FeeInformation
          key={2}
          feeName="Shipping"
          amountAsString={fixPrice(shipping)}
        />
        <FeeInformation
          key={3}
          feeName="VAT (included)"
          amountAsString={fixPrice(1079)}
        />
      </div>
      <FeeInformation
        feeName="grand total"
        amountAsString={fixPrice(subtotal + shipping)}
        customPriceColor="dark-orange-text"
      />
      <Button
        isSubmitButton
        className="button-dark-orange"
        buttonText="continue & pay"
      />
    </section>
  );
};

export default SummaryDetails;
