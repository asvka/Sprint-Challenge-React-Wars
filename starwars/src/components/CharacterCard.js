import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="char-list">
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Species: {props.species}</CardText>
        <CardSubtitle>Homeworld: {props.homeworld}</CardSubtitle>
        <CardSubtitle>Height: {props.height}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default CharacterCard;