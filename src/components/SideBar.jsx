import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import pages from './Pages';

function sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pages</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {pages.map((page, index) => (
              <ul key={index} >
                <li>{page.title}</li>
              </ul>
            ))}
          {/* <ul className='list-unstyled'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/signup">SignUp</a></li>
            <li><a href="/login">Login</a></li>
          </ul> */}
          </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default sidebar;