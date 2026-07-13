import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;