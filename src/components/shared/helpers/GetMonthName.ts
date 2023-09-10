

const GetMonthName = (date: Date): string => {
  const fullMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date(date));
  return fullMonth
};

export default GetMonthName