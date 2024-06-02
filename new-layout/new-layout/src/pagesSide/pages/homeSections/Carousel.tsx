import scss from "./Carousel.module.scss";
const Carousel = () => {
  return (
    <section className={scss.Carousel}>
      <div className="container">
        <div className={scss.content}>
            <h6>carousel</h6>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
