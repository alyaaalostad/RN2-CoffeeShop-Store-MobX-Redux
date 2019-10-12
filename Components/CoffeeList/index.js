import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content } from "native-base";

// Store
// import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    let shops;
    const { coffeeShops } = this.props;
    if (coffeeShops) {
      shops = coffeeShops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    coffeeShops: state.rootCoffee.coffeeShops
  };
};
export default connect(mapStateToProps)(CoffeeList);
