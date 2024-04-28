import React from "react";
import { Badge } from 'react-bootstrap';

const Tags = ({ text, backgroundColor }) => {
  return (
    <Badge bg={backgroundColor} style={{ marginRight: "5px" }}>
      {text}
    </Badge>
  );
};

export default Tags;
