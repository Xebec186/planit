function AddEventPage() {
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

        <form className="space-y-6">
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
              placeholder="e.g. Birthday Party"
              className="w-full rounded-lg border border-planit-border bg-planit-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-planit-text-muted focus:border-planit-primary"
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
              className="w-full rounded-lg border border-planit-border bg-planit-surface px-4 py-3 text-sm outline-none transition-colors focus:border-planit-primary"
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
                min="0"
                placeholder="800"
                className="w-full rounded-lg border border-planit-border bg-planit-surface py-3 pl-14 pr-4 text-sm outline-none transition-colors placeholder:text-planit-text-muted focus:border-planit-primary"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-planit-border pt-6">
            <button
              type="button"
              className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold text-planit-text-muted transition-colors hover:bg-planit-gray"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-planit-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-planit-primary-dark"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddEventPage;
