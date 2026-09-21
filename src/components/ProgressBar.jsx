function ProgressBar({ value, variant = "default" }) {
  const progress = Math.min(Math.max(value, 0), 100);

  const fillColor =
    variant === "danger" ? "bg-planit-danger" : "bg-planit-primary";

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-planit-gray">
      <div
        className={`h-full rounded-full ${fillColor} transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
