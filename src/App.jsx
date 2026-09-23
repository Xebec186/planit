import AddEventPage from "./pages/AddEventPage";
import EventsPage from "./pages/EventsPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/add" element={<AddEventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
