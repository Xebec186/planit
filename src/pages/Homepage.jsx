import calendarImg from "../assets/calendar.png";
import AddEventButton from "../components/AddEventButton";
import EventList from "../components/EventList";
import events from "../data/events";

function Homepage() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    }

    if (hour < 17) {
      return "Good afternoon";
    }

    return "Good evening";
  };

  const hasEvents = events?.length > 0;

  return (
    <main className="min-h-screen p-4 md:px-6 md:py-8">
      <div className="mx-auto max-w-5xl">
        {hasEvents ? (
          <>
            {/* Page header */}
            <header className="mb-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-1 font-semibold text-planit-text-muted">
                    {getGreeting()},
                  </p>

                  <h1 className="text-3xl font-bold tracking-tight text-planit-heading md:text-4xl">
                    Here's what's coming up.
                  </h1>

                  <p className="mt-2 max-w-xl leading-6 text-planit-text-muted">
                    Your next events, planning progress, and budget at a glance.
                  </p>
                </div>

                <AddEventButton />
              </div>
            </header>

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

              <AddEventButton />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Homepage;
