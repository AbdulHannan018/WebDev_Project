import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import BasicExample from "./components/navbar";
import NewsPage from "./components/news";
import CarouselFadeExample from "./components/cara";
import Footer from "./components/footer"; // Import the Footer component
import ReviewsPage from "./components/ReviewsPage"; // Import ReviewsPage component

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar always visible */}
        <BasicExample />

        {/* Main content */}
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainPage />
                </>
              }
            />
            {/* News page with carousel */}
            <Route
              path="/news"
              element={
                <>
                  <CarouselFadeExample />
                  <NewsPage />
                </>
              }
            />
            {/* Reviews page */}
            <Route
              path="/reviews"
              element={
                <>
                  <ReviewsPage />
                </>
              }
            />
          </Routes>
        </div>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
