import { createContext, ReactNode, useReducer } from "react";
import { CountryActionTypes, CountryState, initialState } from "./CountryType";
import countryReducer from "./CountryReducer";

const CountryContext = createContext<{
  state: CountryState;
  dispatch: React.Dispatch<CountryActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  return (
    <CountryContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
