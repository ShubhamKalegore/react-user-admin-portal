import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Profile from "../pages/Profile/Profile";
import Unauthorized from "../pages/Unauthorized/Unauthorized";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import EditUser from "../pages/Users/EditUser";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
        path="/login"
        element={
            <AuthLayout>
            <Login />
            </AuthLayout>
        }
        />

        <Route
        path="/register"
        element={
            <AuthLayout>
            <Register />
            </AuthLayout>
        }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/users"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />
        <Route path="/profile/:id" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users/edit" element={<MainLayout><EditUser /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
