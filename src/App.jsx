import AddEventPage from "./pages/AddEventPage";
import EventsPage from "./pages/EventsPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/add" element={<AddEventPage />} />
          <Route path="/events/:id" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
