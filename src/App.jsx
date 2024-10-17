import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Events from "./pages/Events";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
