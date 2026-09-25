import { FiAlertCircle } from "react-icons/fi";

function ErrorBanner({ error }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-planit-danger">
      <FiAlertCircle size={22} className="shrink-0" />
      <p className="text-sm font-medium">{error}</p>
    </div>
  );
}

export default ErrorBanner;
