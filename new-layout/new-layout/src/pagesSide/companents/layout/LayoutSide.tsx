import { Outlet } from "react-router-dom";
import scss from "./LayoutSide.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
const LayoutSide = () => {
  return (
    <div className={scss.LayoutSide}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSide;
