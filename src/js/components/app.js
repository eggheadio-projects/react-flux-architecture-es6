import React from "react";
import Catalog from "./catalog/app-catalog";
import Cart from "./cart/app-cart";
import CatalogDetail from "./product/app-catalogdetail";
import Template from "./app-template";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Catalog} />
        <Route path="cart" component={Cart} />
        <Route path="item/:item" component={CatalogDetail} />
      </Route>
    </Router>
  );
};
