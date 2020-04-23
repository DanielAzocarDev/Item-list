import React, { Component } from "react";
import FormItem from "./Components/Form/FormItem";
import ItemList from "./Components/ItemList/ItemList";

class App extends Component {
  state = {
    items: [],
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = [...this.state.items, item];

    this.setState({
      items: items,
    });
  };

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="App">
        <FormItem addItem={this.addItem} />
        <ItemList items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
