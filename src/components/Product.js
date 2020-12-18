import React from "react";
import { connect } from "react-redux";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const Product = (props) => {
  const { product } = props;

  const searchArray = (obj) => {
    let found = false;
    if (props.addedItems.some((objInCart) => objInCart.product.id === obj.id)) {
      found = true;
    }
    return found;
  };
  const addFunc = () => {
    if (!searchArray(product)) {
      props.dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    } else {
      props.dispatch({
        type: "INCREASE_QUANTITY",
        payload: product,
      });
    }
  };
  return (
    <div>
      <Card
        style={{
          height: "30%",
          margin: "10px",
        }}
      >
        <CardImg src={product.image} alt="Product" className="card-img" />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>
            Size: <strong>{product.size}</strong> |{" "}
            <span style={{ marginLeft: "2px" }}>Price: </span>
            <strong>${product.price}</strong>
          </CardText>

          <Button onClick={addFunc} color="info">
            Add To Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addedItems: state.cartReducer.addedItems,
  };
};
export default connect(mapStateToProps)(Product);
