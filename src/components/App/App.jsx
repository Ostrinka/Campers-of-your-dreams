import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import './App.module.css'

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage/DetailsPage.jsx"));
const Features = lazy(() => import("../../components/Features/Features.jsx"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews.jsx"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </>
  );
}


