import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "./App.css";

function App() {
  return (
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/admin" element={<Admin />} />
 <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
</Routes>
  );
}

export default App;