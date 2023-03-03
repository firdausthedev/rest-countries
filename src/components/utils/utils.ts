export const popCommas = (num: string | number | undefined): string => {
  if (num) {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "0";
};

export const listCommas = (list: string[] | undefined): string => {
  if (list) {
    return list.map(item => item).join(", ");
  }
  return "";
};

export const regions: string[] = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];
