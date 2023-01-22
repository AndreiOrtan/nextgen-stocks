const isBusinessDay = (date) => {
  const day = date.getDay();
  if (day == 0 || day == 6) {
    return false;
  }
  return true;
};

export const getFormattedPreviousBusinessDay = () => {
  const date = new Date();

  while (!isBusinessDay(date)) {
    date.setDate(date.getDate() - 1);
  }

  const month = date.getMonth() + 1;
  const formattedMonth = month.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return `${date.getFullYear()}-${formattedMonth}-${date.getDate()}`;
};
