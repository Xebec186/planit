import { IoIosClose, IoIosSearch } from "react-icons/io";

function SearchBar({ query, setQuery }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-full border border-planit-border bg-planit-surface px-4 py-2 focus-within:border-planit-primary transition-colors duration-200">
      <IoIosSearch size={20} className="shrink-0 text-planit-text-muted" />

      <input
        type="text"
        value={query}
        placeholder="Search your events..."
        aria-label="Search your events"
        className="min-w-0 flex-1 bg-transparent text-sm text-planit-heading outline-none placeholder:text-planit-text-muted"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        type="button"
        aria-label="Clear search"
        onClick={() => setQuery("")}
        className={`flex shrink-0 cursor-pointer items-center justify-center rounded-full p-1 text-planit-text-muted transition-all hover:bg-planit-primary-light hover:text-planit-primary ${
          query
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <IoIosClose size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
