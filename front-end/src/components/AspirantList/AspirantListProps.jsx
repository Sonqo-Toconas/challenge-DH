import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AspirantList.css';
import avatar from '/avatar.jpg'

function AspirantListProps(props) {
    const [aspirantList, setAspirantList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.api);
                const data = await response.json();
                setAspirantList(data[props.data]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h2 className='aspirant-title'>{props.title}</h2>
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {aspirantList.map((aspirant, i) => (
                        <Col key={i} className='mb-4'>
                            <div className='aspirant-card'>
                                <Image src={aspirant[props.image] ? aspirant[props.image] : avatar} roundedCircle className='aspirant-image' />
                                <div className='aspirant-name'>{aspirant[props.name]}</div>
                                <div className='aspirant-profession'>{aspirant[props.profession]}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default AspirantListProps