import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/index";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
