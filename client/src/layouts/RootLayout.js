import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Navigation />

      {/* Outlet, how we are telling it where to show the components for the paths  */}
      <Outlet />
    </div>
  )
}