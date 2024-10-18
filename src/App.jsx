import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Events from "./pages/Events";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { Toaster } from "sonner";
import ProtectedRoute from "./protectRoute/ProtectedRoute";
import AppLayout from "./UI/AppLayout";
import ViewListing from "./pages/ViewListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="listings" element={<Listings />} />
            <Route path="listing/:id" element={<ViewListing />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route
            path="users"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Listings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
