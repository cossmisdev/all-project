import Footer from "../footer/Footer";
import Header from "../header/Header";
import scss from "./LayoutAdmin.module.scss";

const LayoutAdmin = () => {
  return (
    <div className={scss.LayoutAdmin}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
