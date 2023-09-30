import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import Bag from "./Bag";
import NotFound from "./NotFound"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

  useEffect(() => {
    async function getSnacksandDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacksandDrinks();
  }, []);

  useEffect(
    () => localStorage.setItem("orders", JSON.stringify(orders))
  , [orders])

  const addToOrder = (item) => {
    setOrders(oldOrders => [...oldOrders, item]);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar orders={orders}/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={{snacks:snacks}} title="Snacks" addToOrder={addToOrder}/>
            </Route>
            <Route path="/snacks/:id">
              <Item items={{snacks:snacks}} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={{drinks:drinks}} title="Drinks" addToOrder={addToOrder}/>
            </Route>
            <Route path="/drinks/:id">
              <Item items={{drinks:drinks}} cantFind="/drinks" />
            </Route>
            <Route path="/bag">
              <Bag orders={orders} />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
