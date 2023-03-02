import { searchByNameAndRegion, searchByName } from "../context/CountryActions";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";
import { CountryActionType } from "../context/CountryType";

const Search = () => {
  const { state, dispatch } = useContext(CountryContext);

  const handleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") {
      dispatch({
        type: CountryActionType.RESET_SEARCH,
      });
    } else {
      dispatch({
        type: CountryActionType.SET_SEARCH_KEY,
        payload: e.target.value,
      });
      if (state.region == "") {
        const data = await searchByName(e.target.value);
        dispatch({
          type: CountryActionType.SEARCH_NAME,
          payload: data,
        });
      } else {
        const data = await searchByNameAndRegion(e.target.value, state.region);
        dispatch({
          type: CountryActionType.SEARCH_NAME_REGION,
          payload: {
            country: data,
            region: state.region,
          },
        });
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-4 left-0 flex items-center pl-6 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-black dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        type="search"
        autoComplete="off"
        value={state.searchKey}
        onChange={e => handleSearchInput(e)}
        className="block w-full md:w-[30rem] p-4 pl-14 text-sm text-gray-500 dark:text-white rounded-lg bg-white dark:bg-dark-blue shadow font-semibold outline-none"
        placeholder="Search for country..."
      />
    </div>
  );
};

export default Search;
