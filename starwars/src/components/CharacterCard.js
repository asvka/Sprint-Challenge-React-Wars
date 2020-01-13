import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="char-list">
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Height: {props.height}</CardText>
        <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default CharacterCard;