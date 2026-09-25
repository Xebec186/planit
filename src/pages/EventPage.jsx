import { useNavigate, useParams } from "react-router-dom";
import { EVENTS_STORAGE_KEY } from "../utils/constants";

function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const rawEvents = localStorage.getItem(EVENTS_STORAGE_KEY);
  const events = rawEvents ? JSON.parse(rawEvents) : [];
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div>
        <p>Event not found</p>
        <button onClick={() => navigate("/events")}>Back to events</button>
      </div>
    );
  }

  const { name, date, tasks, budget, spent } = event;

  return (
    <div>
      <header>
        <div>
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default EventPage;
