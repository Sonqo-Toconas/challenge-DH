import React, { useState, useEffect } from 'react';
import { Container, Image, ListGroup, ListGroupItem, Card, CardBody, CardHeader } from 'react-bootstrap';

function UserPanelProps(props) {
    const [userPanel, setUserPanel] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.api);
                const data = await response.json();
                setUserPanel(data[props.data]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Card>
                <CardHeader>
                    <Image src={userPanel[props.image]} roundedCircle className='aspirant-image' />
                    <h2>{userPanel[props.name]} {userPanel[props.lastName]}</h2>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem>DNI: {userPanel[props.dni]}</ListGroupItem>
                        <ListGroupItem>Email: {userPanel[props.email]}</ListGroupItem>
                        <ListGroupItem>Teléfono: {userPanel[props.phone]}</ListGroupItem>
                        <ListGroupItem>LinkedIn: <a href={userPanel[props.UrlLinkedin]}>{userPanel[props.UrlLinkedin]}</a></ListGroupItem>
                        <ListGroupItem>Fecha de nacimiento: {userPanel[props.birthday]}</ListGroupItem>
                        <ListGroupItem>Sexo: {userPanel[props.sex]}</ListGroupItem>
                        <ListGroupItem>Profesión: {userPanel[props.professions]}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Container>
    );
};

export default UserPanelProps;