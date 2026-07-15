import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";
import "../App.css";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ✅ Grid Background Layer */}
      <div className="grid-background absolute inset-0" />

      {/* ✅ Main Content */}
      <main className="container px-10 flex-grow">
        <Header />
        <Outlet />
      </main>

      {/* ✅ Footer */}
      <div className="mt-10 p-10 text-center bg-gray-800">
        Made with 🩷 by Shresth Pandey
      </div>
    </div>
  );
};

export default AppLayout;
