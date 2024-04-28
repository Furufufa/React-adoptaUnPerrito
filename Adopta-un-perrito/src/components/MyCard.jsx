import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function MyCard({ perrito}) {
  const { imagen_Url, name, description, tags } = perrito;

  return (
    <Card style={{ width: '18rem' }}>
      <div>
        <Card.Img variant="top" src={imagen_Url} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>
          {tags.map((tag, index) => (
            <Tags key={index} text={tag} backgroundColor="primary" />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
