import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./AspirantList.css"

function AspirantList() {
    const [aspirantList, setAspirantList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3030/api/aspirantList');
                const data = await response.json();
                setAspirantList(data.aspirants);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h2 className='aspirant-title'>Aspirantes</h2>
            <Container>
                {aspirantList.length === 0 ? (
                    <div>Cargando...</div>
                ) : (
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {aspirantList.map((aspirant, i) => (
                            <Col key={i} className="mb-4">
                                <div className="aspirant-card">
                                    <Image src={aspirant.image} roundedCircle className="aspirant-image" />
                                    <div className="aspirant-name">{aspirant.name}</div>
                                    <div className="aspirant-profession">{aspirant.profession}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    );
}

export default AspirantList