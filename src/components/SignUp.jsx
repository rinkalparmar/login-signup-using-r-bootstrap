import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';


function SignUp() {
    const [data, setData] = useState({ name: "", email: "", mobile: "", password: "" });

    const [store, setStore] = useState([]);

    const [error, setError] = useState("");


    const nameFormate = (name) => {
        return /^[a-zA-Z]+$/.test(name);
    };

    const emailFormate = (email) => {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    };

    const passwordFormate = (password) => {
        return /^[a-zA-Z0-9]+$/.test(password);
    };

    const mobileFormate = (mobile) => {
        return /^\d{10}$/.test(mobile);
    };



    const validation = (data) => {
        const newErrors = {};

        if (!data.name || !nameFormate(data.name)) {
            newErrors.name = "enter only latter as name";
        }

        if (!data.email || !emailFormate(data.email)) {
            newErrors.email = "enter only latter as name";
        }

        if (!data.mobile || !mobileFormate(data.mobile)) {
            newErrors.mobile = "enter only 10 digit";
        }

        if (!data.password || !passwordFormate(data.password)) {
            newErrors.password = "enter password as latter and number only ";
        }

        setError(newErrors);
        return !Object.keys(newErrors).length;//if any error then give false and 0 otherwise truen true
    };

    console.log("object", error);

    const handleSubmit = (event) => {
        event.preventDefault();


        const checkValidation = validation(data);
        if (!checkValidation) {
            return;
        }

        setStore((predata) => ([...predata, data]));
        localStorage.setItem("record", JSON.stringify([...store, data]));
        setData({ name: "", email: "", mobile: "", password: "" });

    };


    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData((predata) => ({ ...predata, [name]: value }));
        validation({ ...data, [name]: value });
    };
    console.log(data);
    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: '600px' }} className='p-4 shadow rounded bg-light'>
                    <h2 className='text-center'>Sign Up Form</h2>
                    <Row className="mb-3">
                        <Form.Group md="4" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="Text"
                                name="name"
                                onChange={handleInput}
                                value={data.name}
                            />
                            {error.name && <div className="error">{error.name}</div>}
                        </Form.Group>
                        <Form.Group md="4" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleInput}
                                value={data.email}
                            />
                            {error.email && <div className="error">{error.email}</div>}
                        </Form.Group>
                        <Form.Group md="4">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                                type="number"
                                name="mobile"
                                onChange={handleInput}
                                value={data.mobile}
                            />
                            {error.mobile && <div className="error">{error.mobile}</div>}
                        </Form.Group>
                        <Form.Group md="4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={handleInput}
                                value={data.password}
                            />
                            {error.password && <div className="error">{error.password}</div>}
                        </Form.Group>
                    </Row>
                    <Button type="submit" onClick={()=>navigator("/login")}>SignUp</Button> <a href="login">login</a>
                </Form>


            </Container>
        </>
    );
}

export default SignUp;
