import { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import AddEventButton from "../components/AddEventButton";
import EventList from "../components/EventList";
import SearchBar from "../components/SearchBar";
import { EVENTS_STORAGE_KEY } from "../utils/constants";
import ErrorBanner from "../components/ErrorBanner";

function EventsPage() {
  const [eventsState] = useState(() => {
    try {
      const rawEvents = localStorage.getItem(EVENTS_STORAGE_KEY);
      return {
        data: rawEvents ? JSON.parse(rawEvents) : [],
        error: null,
      };
    } catch (error) {
      return {
        data: [],
        error:
          error?.message ||
          "An error occurred in loading events. Please try again.",
      };
    }
  });

  const { data: events, error } = eventsState;

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "upcoming", label: "Upcoming" },
    { value: "past", label: "Past" },
  ];

  const displayedEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const searchTerm = query.trim().toLowerCase();

    const filteredEvents = events.filter((event) => {
      const matchesQuery =
        searchTerm === "" || event.name.toLowerCase().includes(searchTerm);

      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);

      const matchesFilter =
        filter === "all" ||
        (filter === "upcoming" && eventDate >= today) ||
        (filter === "past" && eventDate < today);

      return matchesQuery && matchesFilter;
    });

    return [...filteredEvents].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "date":
          comparison = new Date(a.date) - new Date(b.date);
          break;

        case "progress": {
          const progressA =
            a.tasks.total > 0 ? (a.tasks.completed / a.tasks.total) * 100 : 0;

          const progressB =
            b.tasks.total > 0 ? (b.tasks.completed / b.tasks.total) * 100 : 0;

          comparison = progressA - progressB;
          break;
        }

        case "createdAt":
          comparison = new Date(a.createdAt) - new Date(b.createdAt);
          break;

        case "name":
          comparison = a.name.localeCompare(b.name);
          break;

        default:
          comparison = 0;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [query, filter, sortBy, sortDirection, events]);

  const toggleSortDirection = () => {
    setSortDirection((currentDirection) =>
      currentDirection === "asc" ? "desc" : "asc",
    );
  };

  return (
    <main className="min-h-screen p-4 md:px-6 md:py-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-planit-heading md:text-4xl">
                My Events
              </h1>

              <p className="mt-2 max-w-xl leading-6 text-planit-text-muted">
                All your events in one place. Keep track of planning progress,
                dates, and budgets.
              </p>
            </div>

            <AddEventButton />
          </div>
        </header>

        <SearchBar query={query} setQuery={setQuery} />

        <div className="mt-5 flex flex-wrap gap-2">
          {filterOptions.map((option) => {
            const isActive = filter === option.value;

            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(option.value)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-planit-primary-light text-planit-primary"
                    : "text-planit-text-muted hover:bg-planit-primary-light hover:text-planit-primary"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-planit-text-muted">
            {displayedEvents.length}{" "}
            {displayedEvents.length === 1 ? "event" : "events"}
          </p>

          <div className="flex items-center gap-2 text-sm">
            <label
              htmlFor="sort-events"
              className="font-medium text-planit-text-muted"
            >
              Sort by
            </label>

            <div className="flex items-center gap-1">
              <div className="relative">
                <select
                  id="sort-events"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="cursor-pointer appearance-none rounded-lg border border-planit-border bg-planit-surface py-2 pl-3 pr-9 font-semibold text-planit-heading outline-none transition-colors hover:border-planit-primary focus:border-planit-primary focus:ring-2 focus:ring-planit-primary/10"
                >
                  <option value="date">Date</option>
                  <option value="progress">Planning progress</option>
                  <option value="createdAt">Recently added</option>
                  <option value="name">Alphabetical</option>
                </select>

                <IoIosArrowDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-planit-text-muted"
                />
              </div>

              <button
                type="button"
                onClick={toggleSortDirection}
                aria-label={
                  sortDirection === "asc" ? "Sort ascending" : "Sort descending"
                }
                title={sortDirection === "asc" ? "Ascending" : "Descending"}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-planit-border bg-planit-surface text-planit-text-muted transition-colors hover:border-planit-primary hover:text-planit-primary focus:border-planit-primary focus:outline-none focus:ring-2 focus:ring-planit-primary/10"
              >
                {sortDirection === "asc" ? (
                  <LuArrowUp size={17} />
                ) : (
                  <LuArrowDown size={17} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {error ? (
            <ErrorBanner error={error} />
          ) : (
            <EventList events={displayedEvents} />
          )}
        </div>
      </div>
    </main>
  );
}

export default EventsPage;
