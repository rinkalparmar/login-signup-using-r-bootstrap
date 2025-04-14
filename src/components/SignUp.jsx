import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Login from './Login';


function SignUp() {
    const [data, setData] = useState({});

    const [store, setStore] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setStore((predata) => ([...predata, data]));
        localStorage.setItem("record", JSON.stringify([...store, data]));
        setData({ name: "", email: "", mobile: "", password: "" });
    };

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData((predata) => ({ ...predata, [name]: value }));
    };
    console.log(data);
    return (
        <>
            <Container  fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Form onSubmit={handleSubmit} style={{ width: "100%",  maxWidth: '600px' }} className='p-4 shadow rounded bg-light'>
                    <h2 className='text-center'>Sign Up Form</h2>
                    <Row className="mb-3">
                        <Form.Group md="4" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="Text"
                                name="name"
                                onChange={handleInput}
                                value={data.name}
                            />
                        </Form.Group>
                        <Form.Group md="4" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                onChange={handleInput}
                                value={data.email}
                            />
                        </Form.Group>
                        <Form.Group md="4">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name="mobile"
                                onChange={handleInput}
                                value={data.mobile}
                            />
                        </Form.Group>
                        <Form.Group md="4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                onChange={handleInput}
                                value={data.password}
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit">SignUp</Button> <a href="login">login</a>
                </Form>

                {/* {store && (<Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                                <td>{data.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>)} */}
            </Container>
        </>
    );
}

export default SignUp;

// { <tr>
//     <td>{data.name}</td>
//     <td>{data.email}</td>
//     <td>{data.mobile}</td>
//     <td>{data.password}</td>
//   </tr>}