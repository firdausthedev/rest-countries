import { ICountry } from "./CountryType";

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

export const loadTheme = (): string => {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    document.documentElement.classList.add("dark");
    return "dark";
  } else {
    document.documentElement.classList.remove("dark");
    return "light";
  }
};

export const searchByName = async (
  name: string,
): Promise<ICountry[] | null> => {
  const data = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    method: "GET",
  });
  const response = await data.json();
  if (response.status === 404) return null;
  return response;
};

export const searchByRegion = async (
  region: string,
): Promise<ICountry[] | null> => {
  const data = await fetch(`https://restcountries.com/v3.1/region/${region}`, {
    method: "GET",
  });
  const response = await data.json();
  if (response.status === 404) return null;
  return response;
};

export const searchByNameAndRegion = async (
  name: string,
  region: string,
): Promise<ICountry[] | null> => {
  const data = await searchByName(name);
  if (data) return data.filter(country => country.region === region);
  return null;
};