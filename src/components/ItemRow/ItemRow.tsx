// import ImageSlab from "../ImageSlab/ImageSlab";
// import ItemNameAndPrice from "../ItemNameAndPrice/ItemNameAndPrice";
// import Quantity from "../Quantity/Quantity";
// import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
// import { ItemInCart } from "../Cart/Cart";
// import "./item-in-cart.sass";

// interface Props {
//   itemData: ItemInCart;
//   withSpecifyQuantity?: boolean;
// }
// const ItemRow = ({ itemData, withSpecifyQuantity }: Props): JSX.Element => {
//   const { quantity, product, imageData } = itemData;
//   const { mobile, imageAltText } = imageData;
//   return withSpecifyQuantity ? (
//     <div className="row item-in-cart with-specify-quantity">
//       <ImageSlab
//         slabSize="thumbnail"
//         imageData={{
//           imageSrc: mobile,
//           imageAltText: imageAltText,
//         }}
//       />
//       <ItemNameAndPrice product={product} />
//       <SpecifyQuantity />
//     </div>
//   ) : (
//     <div className="row item-in-cart">
//       {" "}
//       <div className="item-image-and-details row">
//         <ImageSlab
//           slabSize="thumbnail"
//           imageData={{
//             imageSrc: mobile,
//             imageAltText: imageAltText,
//           }}
//         />
//         <ItemNameAndPrice product={product} />
//       </div>
//       <Quantity quantity={quantity} withTimes />
//     </div>
//   );
// };

// export default ItemRow;
