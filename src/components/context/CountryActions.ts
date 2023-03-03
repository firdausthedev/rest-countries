import { ICountry } from "./CountryType";

export const searchByName = async (name: string): Promise<ICountry[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!response.ok) {
    return [];
  }
  const data: ICountry[] = await response.json();
  return data;
};

export const searchByRegion = async (region: string): Promise<ICountry[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`,
  );
  if (!response.ok) {
    return [];
  }
  const data: ICountry[] = await response.json();
  return data;
};

export const searchByNameAndRegion = async (
  name: string,
  region: string,
): Promise<ICountry[]> => {
  const data = await searchByName(name);

  return data.filter(country => country.region === region);
};

export const searchByBorder = async (code: string): Promise<ICountry> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${code}`);

  if (!response.ok) {
    throw new Error("Server went wrong");
  }
  const data: ICountry[] = await response.json();

  return data[0];
};

export const fetchNameFromCode = async (code: string): Promise<string> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  if (!response.ok) {
    throw new Error("Server went wrong");
  }
  const data: ICountry[] = await response.json();

  if (data[0].name.common) return data[0].name.common;
  else return "";
};

export const handleBorderNames = async (
  borders: string[] | undefined,
): Promise<string[]> => {
  if (borders === undefined) {
    return [];
  }

  const list: string[] = [];
  for (const border of borders) {
    await fetchNameFromCode(border).then(data => list.push(data));
  }
  return list;
};

export const loadTheme = (): string => {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
    return "dark";
  } else {
    document.documentElement.classList.remove("dark");
    return "light";
  }
};
