import { BrowserRouter } from "react-router";
import HomeRoutes from "./Routes/HomeRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
}
