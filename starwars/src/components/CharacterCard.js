import React from "react";
import { Card, CardText, CardBody, CardSubtitle } from "reactstrap";
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 4rem;
    text-shadow: -1px 0 #f8a643, 0 1px #f8a643, 1px 0 #f8a643, 0 -1px #f8a643;
`;

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="char-list">
        <Title>{props.name}</Title>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Height: {props.height}</CardText>
        <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default CharacterCard;