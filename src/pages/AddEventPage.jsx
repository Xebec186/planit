import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EVENTS_STORAGE_KEY } from "../utils/constants";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

function AddEventPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setDate("");
    setBudget("");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) {
      toast.error("Please enter an event name.");
      return;
    }

    const event = {
      id: crypto.randomUUID(),
      name: trimmedName,
      date: date,
      createdAt: new Date().toISOString(),
      budget: Number(budget) || 0,
      spent: 0,

      tasks: {
        total: 0,
        completed: 0,
        items: [],
      },

      categories: [],

      expenses: [],
    };

    const toastId = toast.loading("Creating event...");

    try {
      setLoading(true);

      const rawEvents = localStorage.getItem(EVENTS_STORAGE_KEY);
      const events = rawEvents ? JSON.parse(rawEvents) : [];

      const updatedEvents = [...events, event];
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(updatedEvents));

      resetForm();
      toast.success("Created event successfully!", { id: toastId });
      navigate(`/events/${event.id}`);
    } catch (error) {
      const errMessage =
        error?.message || "An error occurred in creating event";
      toast.error(errMessage, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-planit-heading">
            Create Event
          </h1>

          <p className="mt-2 text-planit-text-muted">
            Add the basic details for your event.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="event-name"
              className="mb-2 block text-sm font-semibold text-planit-heading"
            >
              Event name
            </label>

            <input
              id="event-name"
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Weekend Trip"
              className="w-full rounded-lg border border-planit-border bg-planit-surface px-4 py-3 text-md outline-none transition-colors placeholder:text-planit-text-muted focus:border-planit-primary"
            />
          </div>

          <div>
            <label
              htmlFor="event-date"
              className="mb-2 block text-sm font-semibold text-planit-heading"
            >
              Event date
            </label>

            <input
              id="event-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full rounded-lg border border-planit-border bg-planit-surface px-4 py-3 text-md outline-none transition-colors focus:border-planit-primary"
            />
          </div>

          <div>
            <label
              htmlFor="event-budget"
              className="mb-2 block text-sm font-semibold text-planit-heading"
            >
              Budget
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-planit-text-muted">
                GH₵
              </span>

              <input
                id="event-budget"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                min="0"
                placeholder="800"
                className="w-full rounded-lg border border-planit-border bg-planit-surface py-3 pl-14 pr-4 text-md outline-none transition-colors placeholder:text-planit-text-muted focus:border-planit-primary"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-planit-border pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold text-planit-text-muted transition-colors hover:bg-planit-gray"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-lg bg-planit-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-planit-primary-dark disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-planit-primary"
            >
              {loading && <CgSpinner size={18} className="animate-spin" />}
              <span>{loading ? "Creating..." : "Create Event"}</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddEventPage;
