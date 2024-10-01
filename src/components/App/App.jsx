// import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '../../../public/vite.svg'
// import './App.module.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import { lazy } from "react";
import './App.module.css'

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage/DetailsPage.jsx"));
const Features = lazy(() => import("../../components/Features/Features.jsx"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
