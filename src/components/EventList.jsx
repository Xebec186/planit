import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import EventListItem from "./EventListItem";

function EventList({ events = [], showAll = true, max = 3 }) {
  let displayedEvents = events;

  if (!showAll) {
    // set baseline to start of today (00:00:00) so today's events are part of upcoming events
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const todayTimestamp = now.getTime();

    const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      // Handle invalid dates safely (places invalid dates at the end)
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;

      return dateA - dateB;
    });

    // filter for upcoming events
    const upcomingEvents = sortedEvents.filter((event) => {
      const eventDate = new Date(event.date).getTime();
      return !isNaN(eventDate) && eventDate >= todayTimestamp;
    });

    displayedEvents = (
      upcomingEvents.length > 0 ? upcomingEvents : sortedEvents
    ).slice(0, max);
  }

  if (events.length === 0) {
    return (
      <div className="py-6 text-center text-sm text-planit-text-muted">
        No events found.
      </div>
    );
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
