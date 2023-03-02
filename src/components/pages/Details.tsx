import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";
import { listCommas, popCommas } from "../context/CountryActions";
import { searchByCode } from "./../context/CountryActions";
import { CountryActionType } from "../context/CountryType";

const Details = () => {
  const { state, dispatch } = useContext(CountryContext);

  const nativeName =
    state.detail?.name.nativeName[Object.keys(state.detail?.name.nativeName)[0]]
      .official;

  const currencies =
    state.detail?.currencies[Object.keys(state.detail?.currencies)[0]].name;

  const languages: string[] = state.detail?.languages
    ? Object.values(state.detail?.languages)
    : [""];

  const borders = state.detail?.borders;

  const handleBorder = async (border: string) => {
    const data = await searchByCode(border);
    dispatch({ type: CountryActionType.SEARCH_CODE, payload: data });
  };

  return (
    <div>
      <div className="container p-5 mx-auto pt-10 dark:text-white/80">
        <Link
          to="/"
          className="flex items-center gap-4 bg-white dark:bg-dark-blue  rounded-lg py-3 px-8  text-sm shadow w-fit">
          <FaArrowLeft /> Back
        </Link>
        <div className="mt-16 grid md:grid-cols-2">
          <img
            src={state.detail?.flags.png}
            alt="flag"
            className="w-full h-full"
          />
          <div className="md:pl-10 py-10 md:py-20">
            <h2 className="text-3xl font-bold ">
              {state.detail?.name.official}
            </h2>
            <div className="grid md:grid-cols-2 mt-7">
              <div className="flex flex-col gap-1">
                <p>
                  <strong>Native Name: </strong> {nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {popCommas(state.detail?.population)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {state.detail?.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {state.detail?.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {state.detail?.capital}
                </p>
              </div>
              <div className="flex flex-col mt-5 md:mt-0 gap-1">
                <p>
                  <strong>Top Level Domain: </strong>
                  {listCommas(state.detail?.tld)}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {currencies}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {listCommas(languages)}
                </p>
              </div>
            </div>
            <div className="flex mt-10 flex-col md:flex-row md:mt-20 md:items-center flex-wrap gap-4 md:gap-0">
              <p className="mr-4">
                {state.detail?.borders && <strong>Border Countries: </strong>}
              </p>
              <div className="flex gap-2 flex-wrap">
                {borders?.map(border => {
                  return (
                    <button
                      onClick={() => handleBorder(border)}
                      key={border}
                      type="button"
                      className="text-sm rounded-md shadow bg-white dark:bg-dark-blue px-5 py-1 hover:bg-very-dark-blue hover:text-white  hover:dark:bg-very-dark-blue transition-colors duration-200">
                      {border}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
