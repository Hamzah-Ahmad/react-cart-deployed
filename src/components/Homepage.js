import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import CartPage from "./CartPage";
import Slider from "@material-ui/core/Slider";
import Drawer from "@material-ui/core/Drawer";
import { Container, Row, Col, Input, Label, CustomInput } from "reactstrap";
import NavBar from "./NavBar";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { getAllProducts } from "../actions/homepageActions";

const Homepage = (props) => {
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(320);
  const [open, setOpen] = useState(false);

  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#17abcd",
        },
        track: {
          color: "#17abcd",
        },
        rail: {
          color: "black",
        },
      },
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.dispatch(getAllProducts(size, price));
  }, []);

  useEffect(() => {
    props.dispatch({
      type: "GET_FILTERED_PRODUCTS",
      payload: { size, price },
    });
  }, [price, size]);

  const marks = [
    {
      value: 110,
      label: "$110",
    },
    {
      value: 200,
      label: "$200",
    },
    {
      value: 320,
      label: "$320",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <NavBar handleDrawerOpen={handleDrawerOpen} />
      <Container>
        <Drawer variant="persistent" anchor="right" open={open}>
          <CartPage handleDrawerClose={handleDrawerClose} />
        </Drawer>
        <Row>
          <Col sm="12" lg="2">
            <div
              style={{
                marginTop: "50px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <h3>Filters:</h3>
              <Label
                for="priceRange"
                style={{
                  marginTop: "20px",
                }}
              >
                <span style={{ marginRight: "5px" }}>Max Price: </span>${price}
              </Label>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  onChange={(e, v) => {
                    console.log("test");
                    console.log(v);
                    setPrice(v);
                  }}
                  step={10}
                  max={320}
                  min={110}
                  marks={marks}
                  defaultValue={320}
                />
              </ThemeProvider>

              <Label for="size" style={{ marginTop: "30px" }}>
                Size:
              </Label>
              <Input
                type="select"
                name="select"
                id="size"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <option value="">All Sizes</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">XL</option>
              </Input>
            </div>
          </Col>
          <Col xs="12" lg="10">
            <Row style={{ marginTop: "50px" }}>
              {props.products.map((product) => (
                <Col xs="12" sm="6" md="4" key={product.id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.homepageReducer.products,
    addedItems: state.cartReducer.addedItems,
  };
};

export default connect(mapStateToProps)(Homepage);
