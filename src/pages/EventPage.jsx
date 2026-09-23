import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sampleEvents from "../data/events";
import { EVENTS_STORAGE_KEY } from "../utils/constants";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const storedEvents = localStorage.getItem(EVENTS_STORAGE_KEY);

    if (!storedEvents) {
      const fallbackEvent = sampleEvents.find((item) => String(item.id) === id);
      setEvent(fallbackEvent || null);
      return;
    }

    try {
      const parsedEvents = JSON.parse(storedEvents);
      const foundEvent = parsedEvents.find((item) => String(item.id) === id);

      if (foundEvent) {
        setEvent(foundEvent);
        return;
      }

      const fallbackEvent = sampleEvents.find((item) => String(item.id) === id);
      setEvent(fallbackEvent || null);
    } catch (error) {
      const fallbackEvent = sampleEvents.find((item) => String(item.id) === id);
      setEvent(fallbackEvent || null);
    }
  }, [id]);

  if (!event) {
    return (
      <main className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-xl rounded-xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">Event not found</h1>
          <p className="mt-2 text-slate-600">
            This event does not exist in the saved data.
          </p>
          <Link
            to="/events"
            className="mt-5 inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Back to events
          </Link>
        </div>
      </main>
    );
  }

  const progressPercent = event.tasks.total
    ? Math.round((event.tasks.completed / event.tasks.total) * 100)
    : 0;

  const remainingBudget = event.budget - event.spent;

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Event details
              </p>
              <h1 className="mt-2 text-3xl font-bold">{event.name}</h1>
            </div>

            <Link
              to="/events"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Back to all events
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Date</p>
            <p className="mt-2 text-xl font-semibold">{event.date}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Budget</p>
            <p className="mt-2 text-xl font-semibold">${event.budget}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Spent</p>
            <p className="mt-2 text-xl font-semibold">${event.spent}</p>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Planning progress</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              {progressPercent}%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
            <span>
              {event.tasks.completed}/{event.tasks.total} tasks complete
            </span>
            <span>Remaining budget: ${remainingBudget}</span>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Tasks</h2>

            <ul className="mt-4 space-y-3">
              {event.tasks.items.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-3"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-slate-500">{task.category}</p>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      task.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {task.completed ? "Done" : "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Expenses</h2>

            {event.expenses.length === 0 ? (
              <p className="mt-4 text-slate-500">No expenses added yet.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {event.expenses.map((expense) => (
                  <li
                    key={expense.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-3"
                  >
                    <div>
                      <p className="font-medium">{expense.description}</p>
                      <p className="text-sm text-slate-500">
                        {expense.category}
                      </p>
                    </div>

                    <span className="font-semibold text-slate-700">
                      ${expense.amount}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default EventPage;
