import AddEventButton from "../components/AddEventButton";

function HomeHeader() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
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
  );
}

export default HomeHeader;
