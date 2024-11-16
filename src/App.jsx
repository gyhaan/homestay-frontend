// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Events from "./pages/Events";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ViewListing from "./pages/ViewListing";
import Profile from "./pages/Profile";
import GuideListings from "./pages/GuideListings";
import AddListing from "./pages/AddListing";
import BookingListing from "./pages/BookingListing";
import ViewBooking from "./pages/ViewBooking";
import ViewGuideBooking from "./pages/ViewGuideBooking";
import PageNotFound from "./pages/PageNotFound";

// Layout and Utilities
import AppLayout from "./UI/AppLayout";
import ProtectedRoute from "./protectRoute/ProtectedRoute";
import { Toaster } from "sonner";
import { AuthProvider } from "./Context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
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
              <Route path="myBookings" element={<ViewBooking />} />
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
              <Route path="myBookings" element={<ViewGuideBooking />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          className: "sonner-toast",
        }}
      />
    </>
  );
}

export default App;
