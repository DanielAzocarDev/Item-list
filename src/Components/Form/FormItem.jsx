import React, { Component } from "react";
import "./FormItem.scss";

class FormItem extends Component {
  state = {
    title: "",
    price: "",
    cost: "",
    units: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);

    this.setState({
      title: "",
      price: "",
      cost: "",
      units: "",
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h3>Add your Items</h3>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={this.changeHandler}
            value={this.state.title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={this.changeHandler}
            value={this.state.price}
          />
        </div>
        <div className="form-control">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            id="cost"
            onChange={this.changeHandler}
            value={this.state.cost}
          />
        </div>
        <div className="form-control">
          <label htmlFor="units">Units</label>
          <input
            type="number"
            id="units"
            onChange={this.changeHandler}
            value={this.state.units}
          />
        </div>
        <button>Create</button>
      </form>
    );
  }
}

export default FormItem;
