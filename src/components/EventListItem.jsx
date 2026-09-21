import { FiCalendar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function EventListItem({ event }) {
  const { id, name, date, budget, spent, tasks } = event;

  const taskProgress =
    tasks.total > 0 ? (tasks.completed / tasks.total) * 100 : 0;

  const budgetProgress = budget > 0 ? (spent / budget) * 100 : 0;

  const isOverSpent = spent > budget;
  const remainingBudget = budget - spent;

  const getDaysUntil = (date) => {
    const today = new Date();
    const eventDate = new Date(date);
    const difference = eventDate - today;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const daysUntil = getDaysUntil(date);

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const countdownText =
    daysUntil > 0
      ? `${daysUntil} days to go`
      : daysUntil === 0
        ? "Today"
        : "Event passed";

  return (
    <Link
      to={`/events/${id}`}
      className="group block w-full rounded-xl border border-planit-border bg-planit-surface px-5 py-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-planit-primary hover:shadow-sm"
    >
      {/* Event heading */}
      <div className="flex gap-3 items-center justify-between">
        <h3 className="min-w-0 text-lg font-bold text-planit-heading transition-colors group-hover:text-planit-primary md:text-xl">
          {name}
        </h3>

        <div
          className={`flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
            daysUntil === 0
              ? "bg-planit-primary/10 text-planit-primary"
              : "bg-planit-background text-planit-text-muted"
          }`}
        >
          <FiClock size={14} />
          <span>{countdownText}</span>
        </div>
      </div>

      {/* Event date */}
      <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-planit-text-muted">
        <FiCalendar size={15} />
        <span>{formattedDate}</span>
      </div>

      {/* Budget and planning progress */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Budget */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-planit-text-muted">
              Budget
            </span>

            <span
              className={`text-xs font-semibold ${
                isOverSpent ? "text-planit-danger" : "text-planit-heading"
              }`}
            >
              GH₵ {spent.toLocaleString()} / GH₵ {budget.toLocaleString()}
            </span>
          </div>

          <ProgressBar
            value={budgetProgress}
            variant={isOverSpent ? "danger" : "default"}
          />

          <p
            className={`mt-1.5 text-xs ${
              isOverSpent
                ? "font-semibold text-planit-danger"
                : "text-planit-text-muted"
            }`}
          >
            {isOverSpent
              ? `GH₵ ${Math.abs(remainingBudget).toLocaleString()} over budget`
              : `GH₵ ${remainingBudget.toLocaleString()} remaining`}
          </p>
        </div>

        {/* Planning progress */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-planit-text-muted">
              Planning progress
            </span>

            <span className="text-xs font-semibold text-planit-heading">
              {tasks.completed} / {tasks.total} tasks
            </span>
          </div>

          <ProgressBar value={taskProgress} />

          <p className="mt-1.5 text-xs text-planit-text-muted">
            {Math.round(taskProgress)}% complete
          </p>
        </div>
      </div>
    </Link>
  );
}

export default EventListItem;
