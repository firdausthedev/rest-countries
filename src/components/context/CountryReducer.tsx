import {
  CountryActionTypes,
  CountryActionType,
  CountryState,
  initialCountry,
} from "./CountryType";

const countryReducer = (
  state: CountryState,
  action: CountryActionTypes,
): CountryState => {
  switch (action.type) {
    case CountryActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CountryActionType.SEARCH_BORDER_NAMES:
      return {
        ...state,
        loading: false,
        borderNames: action.payload,
      };
    case CountryActionType.SET_DARK_THEME:
      return {
        ...state,
        theme: "dark",
      };
    case CountryActionType.SEARCH_REGION:
      return {
        ...state,
        region: action.payload.region,
        country: action.payload.country,
        loading: false,
      };
    case CountryActionType.SEARCH_NAME:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case CountryActionType.SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload,
      };
    case CountryActionType.SEARCH_NAME_REGION:
      return {
        ...state,
        region: action.payload.region,
        country: action.payload.country,
        loading: false,
      };
    case CountryActionType.RESET_SEARCH:
      return {
        ...state,
        country: initialCountry,
        searchKey: "",
        region: "",
        loading: false,
      };
    case CountryActionType.SET_LIGHT_THEME:
      return {
        ...state,
        theme: "light",
      };
    case CountryActionType.SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    case CountryActionType.SEARCH_CODE:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
