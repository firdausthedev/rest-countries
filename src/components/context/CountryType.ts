import { loadTheme } from "./CountryActions";

export interface ICountry {
  name: {
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  flags: {
    png: string;
  };
  subregion: string;
  tld: string[];
  population: number;
  region: string;
  capital: string[] | undefined;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: { [key: string]: string };
  borders: string[] | undefined;
}

export interface CountryState {
  theme: string;
  country: ICountry[] | null;
  searchKey: string;
  region: string;
  detail: ICountry | null;
}

export const initialCountry: ICountry[] = [
  {
    name: {
      official: "Germany",
      nativeName: {
        deu: {
          official: "Bundesrepublik Deutschland",
        },
      },
    },
    subregion: "Western Europe",
    flags: {
      png: "https://flagcdn.com/w320/de.png",
    },
    population: 83240525,
    region: "Europe",
    capital: ["Berlin"],
    tld: [".de"],
    currencies: {
      EUR: { name: "Euro" },
    },
    languages: { deu: "German" },
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
  },
  {
    name: {
      official: "United States of America",
      nativeName: {
        eng: {
          official: "United States of America",
        },
      },
    },
    flags: {
      png: "https://flagcdn.com/w320/us.png",
    },
    population: 329484123,
    region: "Americas",
    capital: ["Washington, D.C."],
    subregion: "North America",
    tld: [".us"],
    currencies: {
      USD: {
        name: "United States dollar",
      },
    },
    languages: { eng: "English" },
    borders: ["CAN", "MEX"],
  },
  {
    name: {
      official: "Brazil",
      nativeName: {
        por: {
          official: "República Federativa do Brasil",
        },
      },
    },
    flags: {
      png: "https://flagcdn.com/w320/br.png",
    },
    population: 212559409,
    region: "Americas",
    capital: ["Brasília"],
    subregion: "South America",
    tld: [".br"],
    currencies: {
      BRL: {
        name: "Brazilian real",
      },
    },
    languages: { por: "Portuguese" },
    borders: [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN",
    ],
  },
  {
    name: {
      official: "Iceland",
      nativeName: {
        isl: {
          official: "Ísland",
        },
      },
    },
    flags: {
      png: "https://flagcdn.com/w320/is.png",
    },
    population: 366425,
    region: "Europe",
    capital: ["Reykjavik"],
    subregion: "Northern Europe",
    tld: [".is"],
    currencies: {
      ISK: {
        name: "Icelandic króna",
      },
    },
    languages: { isl: "Icelandic" },
    borders: undefined,
  },
  {
    name: {
      official: "Afghanistan",
      nativeName: {
        prs: {
          official: "جمهوری اسلامی افغانستان",
        },
      },
    },
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
    population: 40218234,
    region: "Asia",
    capital: ["Kabul"],
    subregion: "Southern Asia",
    tld: [".af"],
    currencies: {
      AFN: {
        name: "Afghan afghani",
      },
    },
    languages: { prs: "Dari", pus: "Pashto", tuk: "Turkmen" },
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
  },
  {
    name: {
      official: "Åland Islands",
      nativeName: {
        swe: {
          official: "Landskapet Åland",
        },
      },
    },
    flags: {
      png: "https://flagcdn.com/w320/ax.png",
    },
    population: 29458,
    region: "Europe",
    capital: ["Europe"],
    subregion: "Northern Europe",
    tld: [".ax"],
    currencies: {
      EUR: {
        name: "Euro",
      },
    },
    languages: { swe: "Swedish" },
    borders: undefined,
  },
  {
    name: {
      official: "Albania",
      nativeName: {
        sqi: {
          official: "Republika e Shqipërisë",
        },
      },
    },
    flags: {
      png: "https://flagcdn.com/w320/al.png",
    },
    population: 2837743,
    region: "Europe",
    capital: ["Tirana"],
    subregion: "Southeast Europe",
    tld: [".al"],
    currencies: {
      ALL: {
        name: "Albanian lek",
      },
    },
    languages: { sqi: "Albanian" },
    borders: ["MNE", "GRC", "MKD", "UNK"],
  },
  {
    name: {
      official: "Algeria",
      nativeName: {
        ara: {
          official: "الجمهورية الديمقراطية الشعبية الجزائرية",
        },
      },
    },
    flags: {
      png: "https://flagcdn.com/w320/dz.png",
    },
    population: 44700000,
    region: "Africa",
    capital: ["Algiers"],
    subregion: "Northern Africa",
    tld: [".dz", "الجزائر."],
    currencies: {
      DZD: {
        name: "Algerian dinar",
      },
    },
    languages: { ara: "Arabic" },
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
  },
];

export const initialState: CountryState = {
  theme: loadTheme(),
  country: initialCountry,
  searchKey: "",
  region: "",
  detail: null,
};

export enum CountryActionType {
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  SEARCH_REGION,
  SEARCH_NAME,
  SET_SEARCH_KEY,
  RESET_SEARCH,
  SEARCH_NAME_REGION,
  SET_DETAIL,
}

export interface setDetail {
  type: CountryActionType.SET_DETAIL;
  payload: ICountry;
}

export interface setDarkTheme {
  type: CountryActionType.SET_DARK_THEME;
}

export interface setLightTheme {
  type: CountryActionType.SET_LIGHT_THEME;
}

export interface searchRegion {
  type: CountryActionType.SEARCH_REGION;
  payload: {
    country: ICountry[] | null;
    region: string;
  };
}

export interface searchNameAndRegion {
  type: CountryActionType.SEARCH_NAME_REGION;
  payload: {
    country: ICountry[] | null;
    region: string;
  };
}

export interface resetCountry {
  type: CountryActionType.RESET_SEARCH;
}
export interface setSearchKey {
  type: CountryActionType.SET_SEARCH_KEY;
  payload: string;
}

export interface searchName {
  type: CountryActionType.SEARCH_NAME;
  payload: ICountry[] | null;
}

export type CountryActionTypes =
  | setDarkTheme
  | setLightTheme
  | searchRegion
  | searchName
  | resetCountry
  | setSearchKey
  | searchNameAndRegion
  | setDetail;
