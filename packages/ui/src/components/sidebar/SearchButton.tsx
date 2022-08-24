import { SearchIcon } from "../icons";

const SearchButton = () => {
  return (
    <button className="text-left flex items-center gap-2 px-2 py-1 rounded-md w-full border border-neutral-100 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <span className="text-xl">
        <SearchIcon />
      </span>
      <p className="flex-1 truncate">Search...</p>
      <kbd>/</kbd>
    </button>
  );
};

export default SearchButton;
