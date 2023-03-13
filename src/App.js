import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
  import { useState } from "react";

function App() {
  const appData = [
    {
      ProductImg:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTS8bNqwkTDFgLk9UR0W6P-BkUQ4bLx88Fxc_kwAgzHr3z3lanUiikY7pOqOwMaM7HkqmkGXnm-FiX1b4QCwLkUXcbg_bLorKcHUxf5MG6K&usqp=CAE",
      ProductName: "KIA",
      Model: "Seltos",
      StarRating: <div>
      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>,
      ProductPrice: "Rs.20 Lakhs",
    },
    {
      ProductImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjo9Hb8zETxqp5Em7ADUJw28OqILgVdJB-Q&usqp=CAU",
      ProductName: "MAHINDRA",
      Model: "XUV700",
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>,
      ProductPrice: "Rs.30 Lakhs",
    },
    {
      ProductImg:
        "https://qph.cf2.quoracdn.net/main-qimg-2deab00096e08d36edb3e3f4501bafb9-lq",
      ProductName: "MAHINDRA",
      Model: "Thar",
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>,
      ProductPrice: "Rs.15 Lakhs",
    },
    {
      ProductImg:
        "https://motoroctane.com/wp-content/uploads/2021/11/Tata-Nexon.jpg",
      ProductName: "TATA",
      Model: "Nexon",
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>,
      ProductPrice: "Rs.14 Lakhs",
    },
    {
      ProductImg:
        "https://images.91wheels.com//assets/b_images/main/models/profile/profile1660828002.jpg",
      ProductName: "TATA",
      Model: "Harrier",
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>,
      ProductPrice: "Rs.20 Lakhs",
    },
    {
      ProductImg:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcoNx2Xcbr1EF-GtmiZcPiOgXQ66rX5pD8wgWneOotXQuN0oRteTyBmSv6Z1cqvMq5qZsyKNVRcXZZEx7rt-cSuGH2pGLDDwfhHUpnMX4&usqp=CAE",
      ProductName: "JEEP",
      Model: "Compass",
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>,
      ProductPrice: "Rs. 35 Lakhs",
    },
    {
      ProductImg:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/2.png",
      ProductName: "HYUNDAI",
      Model: "Creta",
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>,
      ProductPrice: "Rs.20 Lakhs",
    },
    {
      ProductImg:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-2023-exterior-left-front-three-quarter.jpeg?isig=0&q=75",
      ProductName: "TOYOTA",
      Model: "Innova Crysta",      
      StarRating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
      ProductPrice: "Rs.35 Lakhs",
    },
  ];

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="lite" variant="lite">
        <Container>
          <Navbar.Brand href="#home">Shopping Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Popular items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button variant="light">
                  <i className="fa-sharp fa-solid fa-cart-plus"></i> Cart{" "}
                  <span>{count}</span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
        <header className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="fw-bolder">Shop in Style</h1>
              <p className="lead text-white-50 mb-0">
                With this shop hompeage template
              </p>
            </div>
          </div>
        </header>
    
      
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
            
              {appData.map((value, idx) => (
                <Data value={value} idx={idx} setCount={setCount} count={count} />
              ))}
            </div>
          </div>
        </section>
      
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2023
            </p>
          </div>
        </footer>

    </div>
    
  );
}

export default App;

function Data({ value, idx, setCount, count }) {
  const [select, setSelect] = useState(false);
  function addToCart() {
    setSelect(!select);
    setCount(count + 1);
  }
  function removeFromCart() {
    setSelect(!select);
    setCount(count - 1);
  }
  return (
    
      <div className="col mb-5" id="box">
        <div className="card h-100" key={idx}>
          <img className="card-img-top" src={value.ProductImg} alt=""/>
            <div className="card-body p=5">
              <div className="text-center">
                <h5 className="fw-bolder">{value.ProductName}</h5>
                <h5 className="fw-bolder">{value.Model}</h5><br></br>
                <h5>{value.ProductPrice}</h5>
                  {value.StarRating}

            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transperent">
            <div className="text-center">
              
              {!select ? (
                <button
                  className="btn btn-primary mt-auto"
                  href="#"
                  onClick={addToCart}>
                  Add to Cart <i class="fa-solid fa-cart-plus"></i>
                </button>):("")}
              {select ? (
                <button
                  className="btn btn-warning mt-auto"
                  href="#"
                  onClick={removeFromCart}>
                  Remove from Cart
                </button>
              ):("")}
            </div>
          </div>
        </div>
      </div>
      
    
  );
}
