import { useState } from "react";
import {
  searchByNameAndRegion,
  searchByRegion,
} from "../context/CountryActions";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";
import { CountryActionType } from "../context/CountryType";

const DropDown = () => {
  const [isShowDD, setIsShowDD] = useState(false);
  const { state, dispatch } = useContext(CountryContext);

  const handleRegion = async (region: string) => {
    if (state.searchKey == "") {
      const data = await searchByRegion(region);
      dispatch({
        type: CountryActionType.SEARCH_REGION,
        payload: {
          country: data,
          region: region,
        },
      });
    } else {
      const data = await searchByNameAndRegion(state.searchKey, region);
      dispatch({
        type: CountryActionType.SEARCH_NAME_REGION,
        payload: {
          country: data,
          region: region,
        },
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsShowDD(!isShowDD)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black rounded-lg bg-white dark:bg-dark-blue dark:text-white  p-4 text-sm text-start inline-flex items-center shadow"
        type="button">
        Filter by region
        <svg
          className="w-4 h-4 ml-10"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 mt-3 ${
          isShowDD ? "block" : "hidden"
        } bg-white dark:bg-dark-blue  divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}>
        <ul
          className="py-2 text-sm text-black dark:text-white"
          aria-labelledby="dropdownDefaultButton">
          <li>
            <button
              type="button"
              onClick={() => {
                handleRegion("Africa");
              }}
              className={`flex w-full  px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
                state.region === "Africa" && "bg-very-dark-blue text-white"
              }`}>
              Africa
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleRegion("Americas");
              }}
              className={`flex w-full  px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
                state.region === "Americas" && "bg-very-dark-blue text-white"
              }`}>
              America
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleRegion("Asia");
              }}
              className={`flex w-full  px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
                state.region === "Asia" && "bg-very-dark-blue text-white"
              }`}>
              Asia
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleRegion("Europe");
              }}
              className={`flex w-full  px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
                state.region === "Europe" && "bg-very-dark-blue text-white"
              }`}>
              Europe
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleRegion("Oceania");
              }}
              className={`flex w-full  px-4 py-2 hover:bg-very-dark-blue hover:text-white ${
                state.region === "Oceania" && "bg-very-dark-blue text-white"
              }`}>
              Oceania
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
