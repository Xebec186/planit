import { IoMdAdd } from "react-icons/io";
import calendarImg from "../assets/calendar.png";

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

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-1 font-semibold text-planit-text-muted">
            {getGreeting()},
          </p>
          <h1 className="mb-3 text-4xl font-bold text-planit-heading">
            Let's plan something great!
          </h1>
          <p className="leading-7 text-planit-text-muted">
            Keep track of your events, manage your tasks, and stay on budget -
            all in one place.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <img
            src={calendarImg}
            alt="Calendar Illustration"
            className="w-full max-w-md object-contain"
          />

          <p className="mt-2 mb-5 max-w-md text-sm font-medium text-planit-text-muted">
            Add your first event and bring your plans to life.
          </p>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-planit-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-planit-primary-dark"
          >
            <IoMdAdd size={20} />
            <span className="text-sm">Add Event</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
