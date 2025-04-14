import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  // const [store, setStore] = useState({});



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.email);
    const user = JSON.parse(localStorage.getItem("record"));
    console.log(user);
    const findUser = user.find((data) => { if (data.email === input.email && data.password === input.password) { return data; } });
    console.log(findUser);

    setInput({ email: "", password: "" });
    if (findUser) {
      console.log("Login Successfull");
      navigate("/home");
      localStorage.setItem("isAuthenticate", true);//this set true if user enter correct data rhen set true otherwise false
    }
    else {
      console.log(" not  Login");
      navigate("/login");
    }

    setInput((predata) => ([...predata, input]));
    localStorage.setItem("logindata", JSON.stringify({...input}));
    setInput({ email: "", password: "" });
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInput((input) => ({ ...input, [name]: value }));
  };

  

  return (
    <>
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: '600px' }} className='p-4 shadow rounded bg-light'>
              <h2>Login Form</h2>
              <Row className="mb-3">
                <Form.Group md="4" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name='email'
                    onChange={handleInput}
                    value={input.email}
                  />
                </Form.Group>
                <Form.Group md="4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name='password'
                    onChange={handleInput}
                    value={input.password}
                  />
                </Form.Group>
              </Row>
              <Button type="submit">Login </Button> <a href="signup">create new account</a>
            </Form>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Login;