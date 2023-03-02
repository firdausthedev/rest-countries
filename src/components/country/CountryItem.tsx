import { Link } from "react-router-dom";
import { listCommas, popCommas } from "../context/CountryActions";
import { CountryActionType, ICountry } from "./../context/CountryType";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";

const CountryItem = ({ country }: { country: ICountry }) => {
  const { dispatch } = useContext(CountryContext);

  return (
    <Link
      to="/details"
      className="flex flex-col shadow bg-white dark:bg-dark-blue dark:text-white rounded-lg overflow-hidden"
      state={country}
      onClick={() => {
        dispatch({
          type: CountryActionType.SET_LOADING,
        });
        dispatch({ type: CountryActionType.SET_DETAIL, payload: country });
      }}>
      <img src={country.flags.png} alt="flag" className="h-44" />
      <div className="p-7 pb-10">
        <h3 className="font-bold text-xl mb-4">{country.name.official}</h3>
        <p>
          <strong>Population:</strong> {popCommas(country.population)}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong>{" "}
          {country.capital !== undefined ? listCommas(country.capital) : ""}
        </p>
      </div>
    </Link>
  );
};

export default CountryItem;
