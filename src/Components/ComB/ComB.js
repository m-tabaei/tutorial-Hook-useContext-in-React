import { useContext } from "react";
import { MyContext } from "../App/App";
import { Carousel } from "react-bootstrap";

const ComB = () => {
  let { slider, error, loading } = useContext(MyContext);
  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      {loading && (
        <div>
          <span className="spinner-border spinner-border-sm"></span>
        </div>
      )}
          <Carousel data-bs-theme="dark">
      {slider &&
        slider.map((elem) => {
          return (
              <Carousel.Item key={elem.id}>
                <img
                  className="d-block w-100"
                  src={elem.image}
                  alt={elem.alt}
                />
                <Carousel.Caption className="text-white">
                  <h5>{elem.title}</h5>
                  <p>{elem.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
          );
        })}
        </Carousel>
    </>
  );
};

export default ComB;
