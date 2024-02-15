const fixPrice = (priceToFix: number) => {
  let numCommas = Math.floor(Math.log10(priceToFix) / 3);
  if (numCommas === 0) {
    return `$ ${priceToFix.toFixed(2)}`;
  }
  let fixedPrice = "";
  while (numCommas > 0) {
    const group = priceToFix % 1000;
    if (group < 100 && group > 9) {
      fixedPrice = `,0${group.toFixed(2)}` + fixedPrice;
    } else if (group < 10) {
      fixedPrice = `,00${group.toFixed(2)}` + fixedPrice;
    } else {
      fixedPrice = `,${group.toFixed(2)}` + fixedPrice;
    }
    priceToFix = Math.floor(priceToFix / 1000);
    numCommas--;
  }

  fixedPrice = `$ ${priceToFix}` + fixedPrice;
  return fixedPrice;
};

export default fixPrice;
