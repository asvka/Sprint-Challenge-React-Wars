import React, { useState, useEffect, Container, Row } from 'react';
import axios from 'axios';
import { Card, CardBody, CardText, CardSubtitle } from 'reactstrap';

export default function CharacterList() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(`These are not the droids you're searching for.`, err);
        });
    }, []);
    console.log(character);

    return (
        <Container>
            <Row>
                {character.map(char)=>{
                    key = 
                }}
            </Row>
        </Container>
    )

}