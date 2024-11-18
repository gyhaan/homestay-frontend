// React Router
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Listings = lazy(() => import("./pages/Listings"));
const Events = lazy(() => import("./pages/Events"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ViewListing = lazy(() => import("./pages/ViewListing"));
const Profile = lazy(() => import("./pages/Profile"));
const GuideListings = lazy(() => import("./pages/GuideListings"));
const AddListing = lazy(() => import("./pages/AddListing"));
const BookingListing = lazy(() => import("./pages/BookingListing"));
const ViewBooking = lazy(() => import("./pages/ViewBooking"));
const ViewGuideBooking = lazy(() => import("./pages/ViewGuideBooking"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// Layout and Utilities
import AppLayout from "./UI/AppLayout";
import ScrollToTop from "./UI/ScrollToTop";
import ProtectedRoute from "./protectRoute/ProtectedRoute";
import { Toaster } from "sonner";
import { AuthProvider } from "./Context/AuthProvider";
import FullPageLoader from "./UI/FullPageLoader";

function App() {
  return (
    <>
      <AuthProvider>
        <Suspense fallback={<FullPageLoader />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
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
                <Route path="listings" element={<Listings />} />
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
                <Route path="listings" element={<Listings />} />
                <Route path="profile" element={<Profile />} />
                <Route path="myListings" element={<GuideListings />} />
                <Route path="addListing" element={<AddListing />} />
                <Route path="myBookings" element={<ViewGuideBooking />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ScrollToTop />
          </BrowserRouter>
        </Suspense>
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
