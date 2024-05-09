import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary h-50">
        <a className="navbar-brand fs-3 fst-italic " href="/">
          FlavourHub
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/createuser">
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

// import React from 'react';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

// const VerticalNavbar = () => {
//   return (
//     <div>
//       <Navbar bg="info" expand="lg">
//         <Container>
//           <Navbar.Brand href="/" className='fs-4 fst-italic'>FlavourHub</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarNav" />
//           <Navbar.Collapse id="navbarNav">
//             <Nav className="flex-column">
//               <Nav.Link href="/" className="nav-link active">
//                 Home
//               </Nav.Link>
//               <Nav.Link href="/login" className="nav-link">
//                 Login
//               </Nav.Link>
//               <Nav.Link href="/" className="nav-link me-auto" >
//                 Pricing
//               </Nav.Link>
//               <NavDropdown title="Dropdown" id="navbarDropdown">
//                 <NavDropdown.Item href="/">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="/">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="/">Something else here</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default VerticalNavbar;
