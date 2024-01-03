import React from "react";

const ProductXx99MarkTwoHeadphones = () => {
  return (
    <div>
      <h1>Product xx99 Mark Two Headphones!</h1>;
    </div>
  );
};

export default ProductXx99MarkTwoHeadphones;

// 1. CategoryFeaturedProduct component.  This should really be called just a FeaturedProduct component.
// I have to tweak this component to return different material for the product pages than it does
// for the category-pages.  Specifically, the difference is a price is listed for product-pages only, and
// the See Product button on the category pages is turned into a row of two buttons: a quantity incrementor/decrementor and Add to Cart button

// 2. ProductFeatures component.  This will be a new component that I make that has a simple header and two paragraphs.
// the content for the header and two paragraphs will come from the data.json.  I need to figure out how to put a space
// between two sections of material that come from the same json property.  Thinking I'll render one paragraph
// that pulls in the Features data from data.json and then uses a <span> element to hard code some space between
// the two paragraph sections.  So: <p className="product-features"> text <span classname="features-gap"> text </p>

// 3. InTheBox component.  This component will use .map() twice.  Once to pull out all the quantities
// that are in the featuredProduct.includes array of objects.  And then again to pull out the name
// of each of those included items.  I'm thinking of making a ul with each pair of quantity/item an li that is
// a flex row.

// 4. gallery component.  This component should have 3 images all passed in as props.  The first two images
// should be wrapped in a sub container.  So 1 and 2 would be the top level container, and 1a. and 1b. would be
// within 1.  This will make it easier to pop 1 and 2 into a row for tablet and desktop while keeping 1a and 1b as a column

// 5. YouMayAlsoLike.  This component should consist of a top level header, followed by a div.content-slab that renders
// a CustomImage component.  Under that should be a FeaturedProductInfo component that renders only the header and button a la
// FeaturedProductTwo and Three on the Homepage.

// 6. ProductCategoryMenu AboutUs and Footer reused

//

//

// For styles - Let's make one sass sheet that works for all product-pages, similarly to how we made one
// stylesheet work for all category-pages.  The styles on these pages are the same, with some individual styles
// put on the components that build the page.
