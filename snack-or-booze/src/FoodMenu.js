import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

function FoodMenu({ items, title, addToOrder }) {
  const category = Object.keys(items)[0];
  const Items = Object.values(items)[0];

  const handleClick = (e) => {
    const id = e.target.id;
    const item = Items.filter(item => item.id === id)[0];
    const addItem = (({id, name}) => ({id, name}))(item);
    addToOrder(addItem);
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {`${title} Menu`}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {Items.map(item => (
              <div key={item.id}>
                <Link to={`/${category}/${item.id}`}>
                  <ListGroupItem>{item.name}</ListGroupItem>
                </Link>
                <Button id={item.id} onClick={handleClick}>add</Button>
              </div>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
