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
import Profile from "./pages/Profile";
import GuideListings from "./pages/guideListings";
import AddListing from "./pages/AddListing";
import BookingListing from "./pages/BookingListing";

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
            <Route path="profile" element={<Profile />} />
            <Route path="booking/:id" element={<BookingListing />} />
          </Route>
          <Route
            path="guides"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Listings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="myListings" element={<GuideListings />} />
            <Route path="addListing" element={<AddListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
