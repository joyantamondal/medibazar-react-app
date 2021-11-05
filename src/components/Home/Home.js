import React, { useEffect, useState } from "react";
import { Accordion, Carousel, Container, Row } from "react-bootstrap";
import HomeMedicine from "../HomeMedicine/HomeMedicine";
import("./Home.css");

const Home = () => {
  const [medicineHome, setMedicineHome] = useState([]);
  useEffect(() => {
    fetch("./medicineHome.JSON")
      .then((res) => res.json())
      .then((data) => setMedicineHome(data));
  }, []);
  return (
    <div className="home">
      <Container>
        <Carousel className="mb-4">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider-img"
              src="https://thumbs.dreamstime.com/b/medicine-pills-package-shopping-basket-pharmacy-background-medicine-pills-package-shopping-basket-pharmacy-123021896.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <p className="openning">New Shop Openning</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 slider-img"
              src="https://5.imimg.com/data5/QZ/FY/FW/IOS-23928856/product-jpeg-500x500.png?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
            <p className="openning">New Shop Openning</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://img.huffingtonpost.com/asset/5e6fba9723000004220c6205.jpeg?cache=78GpjpodTK&ops=scalefit_720_noupscale&format=webp?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
            <p className="openning">24/7 Doctors Available</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="mb-4">Medicines</h3>
        <Row xs={1} md={2} lg={4} sm={1} className="g-4">
          {medicineHome.map((medicine) => (
            <HomeMedicine medicine={medicine} key={medicine.id}></HomeMedicine>
          ))}
        </Row>
      </Container>
            <Container className="pt-5">
              
      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <h3>FAQ</h3>
    <Accordion.Header>Delivery Process?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Money Back Garuentee?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </Container>
    </div>
  );
};

export default Home;
