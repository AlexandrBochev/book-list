import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
