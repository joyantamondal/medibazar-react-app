import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Card, Col, Modal } from "react-bootstrap";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
// import("./HomeMedicine.css");
const HomeMedicine = (props) => {
  const { name, img, price,id} = props.medicine;
  return (
    <div>
      <Col>
        <Card className="card shadow-lg">
          <div className="">
            <div>
              <Card.Img variant="bottom" src={img} className="card-img" />
            </div>
            <div className="">
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: {price}</Card.Text>
                <Link to={`/details/${id}`}><Button variant="outline-primary"  className="details-button">
                  Details
                </Button></Link>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default HomeMedicine;
