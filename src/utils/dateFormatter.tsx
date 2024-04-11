const dateFormatter = (dateStr: string) => {
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toLocaleDateString("fr-CA"); // 'fr-CA' locale gives the format 'YYYY-MM-DD'
  // 출력: "2024-04-08"
  return formattedDate;
};

export default dateFormatter;
