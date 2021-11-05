import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "./medicineHome.json";
import "./Details.css";

const Details = () => {
  const { userId } = useParams();
  const exactItem = data.filter((dt) => dt.id === userId);
  console.log(exactItem);
  console.log(userId);
  return (
    <div className="details">
      <div className="details-inner">
        <Card>
          <Card.Img variant="top" src={exactItem[0].img} className="card-img" />
          <Card.Body>
            <Card.Title>{exactItem[0].name} </Card.Title>
            <Card.Text>
            {exactItem[0].details} 
            </Card.Text>
            <Card.Text>
            {exactItem[0].price} 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Details;
