import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import HomePage from "@/components/Pages/HomePage";
import { Route, Routes } from "react-router";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
