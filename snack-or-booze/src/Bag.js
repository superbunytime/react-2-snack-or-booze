import React from "react";
import { Card, CardBody, CardTitle,  ListGroup, ListGroupItem, } from "reactstrap";

function Bag({ orders }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Your Order!
            </h3>
          </CardTitle>
          <ListGroup>
            {orders.map(item => (
                <ListGroupItem key={item.id}>
                    {item.name}
                </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Bag;
