const isBusinessDay = (date: Date) => {
  const day = date.getDay();
  if (day == 0 || day == 6) {
    return false;
  }
  return true;
};

export const getFormattedPreviousBusinessDay = () => {
  const date = new Date();

  do {
    date.setDate(date.getDate() - 1);
  } while (!isBusinessDay(date));

  const day = date.getDate();
  const formattedDay = day.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const month = date.getMonth() + 1;
  const formattedMonth = month.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return `${date.getFullYear()}-${formattedMonth}-${formattedDay}`;
};
