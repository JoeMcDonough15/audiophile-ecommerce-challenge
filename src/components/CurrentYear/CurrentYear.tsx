const CurrentYear = (): JSX.Element => {
  const date: Date = new Date();
  const currentYear: string = date.getFullYear().toString();
  return <span>{currentYear}</span>;
};

export default CurrentYear;
