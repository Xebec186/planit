import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import EventListItem from "./EventListItem";

function EventList({ events = [], showAll = true, max = 3 }) {
  // TODO: Add sort by prop to sort by custom order in events page
  let displayedEvents = events;

  if (!showAll) {
    displayedEvents = events
      .toSorted((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        // Handle invalid dates safely (places invalid dates at the end)
        if (isNaN(dateA)) return 1;
        if (isNaN(dateB)) return -1;

        return dateA - dateB;
      })
      .slice(0, max);
  }

  return (
    <section>
      {/* Events */}
      <div className="space-y-4">
        {displayedEvents?.map((event) => (
          <EventListItem key={event.id} event={event} />
        ))}
      </div>

      {/* View all */}
      {!showAll && events.length > displayedEvents.length && (
        <div className="mt-5 flex justify-end">
          <Link
            to="/events"
            className="flex items-center gap-0.5 font-semibold text-planit-text-muted transition-colors hover:text-planit-primary"
          >
            <span>View all events</span>
            <IoChevronForward size={20} />
          </Link>
        </div>
      )}
    </section>
  );
}

export default EventList;
