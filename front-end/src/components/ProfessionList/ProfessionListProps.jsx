import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './ProfessionList.css';

function ProfessionListProps(props) {

    const [professionList, setProfessionList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.api);
                const data = await response.json();
                setProfessionList(data[props.data]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h2 className='profession-title'>{props.title}</h2>
            <Table hover className='profession-table'>
                <tbody>
                    <tr>
                        <td className='blue-title'>{props.titleTable}</td>
                    </tr>
                    {professionList.map((profession, i) => (
                        <tr key={i}>
                            <td>{profession[props.name]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ProfessionListProps