import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function AddEventButton() {
  return (
    <Link
      to="/events/add"
      className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-planit-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-planit-primary-dark hover:shadow-sm shrink-0"
    >
      <IoMdAdd size={20} />
      <span>Add Event</span>
    </Link>
  );
}

export default AddEventButton;
