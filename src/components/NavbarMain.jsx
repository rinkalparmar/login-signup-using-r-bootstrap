import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import { useState, useEffect, use } from 'react';
import { MdAccountCircle } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';


function NavbarMain() {
  let navigate = useNavigate();
  // const [isuser, setIsUser] = useState(false);
  const isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticate"));

  useEffect(() => {
    const isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticate"));
    console.log("isAuthenticate", isAuthenticate);
    // setIsUser(isAuthenticate);
  }, []);

  // /////////////////////////////////////logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticate");//this is rmove true when user clicked logout button
    // setIsUser(false);
    navigate("/login");
    localStorage.removeItem("logindata");//this is remove logindata when user clicked logout button
  };
  // console.log("isuser,", isuser);

  const userInfo = JSON.parse(localStorage.getItem("record"));
  const logindata = JSON.parse(localStorage.getItem("logindata"));
  console.log("logindata", logindata);
  console.log("userInfo", userInfo);

  // ///////////////////also fins user name
  // userInfo.map((data) => {
  //   console.log("userInfo................", data);
  //   if (data?.email === logindata?.email) {//here logindata is array so used [0] and get name 
  //     console.log("hello", data.name);
  //     let currentUser = data.name;
  //     return data.name;
  //   }
  //   else {
  //     console.log("not hello");
  //   }
  // });

  const CurrentUser = userInfo.find((data) => { return data.email === logindata.email; });
  console.log("CurrentUser", CurrentUser.name);
  console.log("found");

  return (
    <Navbar expand="lg" className=" fixed-top" style={{ backgroundColor: "rgb(51, 51, 51)" }}>
      <Container>
        <Navbar.Brand href="/" className="text-white">  Demo Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >

          {
            isAuthenticate ?
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant='light' className='bg-light border-0'>
                  <MdAccountCircle style={{ height: "35px", width: "40px" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu className='p-3 bg-light text-bold'>
                  <button className='btn btn-danger btn-sm'> <Dropdown.Item onClick={handleLogout}>LogOut</Dropdown.Item></button>
                  <Dropdown.Item >hello {CurrentUser.name}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> : <>
                <Button variant="primary mx-4" onClick={() => navigate("/login")}>Login</Button>
                <Button variant="primary" onClick={() => navigate("/signup")}>SignUp</Button>
              </>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;