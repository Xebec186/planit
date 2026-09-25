import { useState } from "react";
import calendarImg from "../assets/calendar.png";
import AddEventButton from "../components/AddEventButton";
import EventList from "../components/EventList";
import { EVENTS_STORAGE_KEY } from "../utils/constants";
import HomeHeader from "../components/HomeHeader";
import ErrorBanner from "../components/ErrorBanner";

function HomePage() {
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

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const hasEvents = events?.length > 0;

  return (
    <main className="min-h-screen p-4 md:px-6 md:py-8">
      <div className="mx-auto max-w-5xl">
        {error ? (
          <>
            {/* Page header */}
            <HomeHeader />

            {/* Error */}
            <div className="mt-6">
              <ErrorBanner error={error} />
            </div>
          </>
        ) : hasEvents ? (
          <>
            {/* Page header */}
            <HomeHeader />

            {/* Upcoming events */}
            <EventList events={events} showAll={false} />
          </>
        ) : (
          <>
            {/* Empty state header */}
            <header className="flex flex-col items-center text-center">
              <p className="mb-1 font-semibold text-planit-text-muted">
                {getGreeting()},
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-planit-heading md:text-4xl">
                Let's plan something great!
              </h1>

              <p className="mt-3 max-w-md leading-7 text-planit-text-muted">
                Create your first event and keep your tasks, budget, and plans
                in one place.
              </p>
            </header>

            {/* Empty state */}
            <div className="mt-8 flex flex-col items-center text-center">
              <img
                src={calendarImg}
                alt="Calendar illustration"
                className="w-full max-w-sm object-contain"
              />
              <div className="mt-8">
                <AddEventButton />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default HomePage;
