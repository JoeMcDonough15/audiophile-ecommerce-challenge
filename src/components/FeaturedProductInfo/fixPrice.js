const fixPrice = (priceToFix) => {
  let numCommas = Math.floor(Math.log10(priceToFix) / 3);
  let fixedPrice = "";
  while (numCommas > 0) {
    const group = priceToFix % 1000;
    fixedPrice = `,${group.toString()}` + fixedPrice;
    priceToFix = Math.floor(priceToFix / 1000);
    numCommas--;
  }
  fixedPrice = `$ ${priceToFix}` + fixedPrice;
  return fixedPrice;
};

export default fixPrice;
