import React from "react";

class ShoppingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      item: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addShoppingItem = event => {
    event.preventDefault();
    this.props.postShoppingItem(this.state);
    this.setState({
      id: "",
      item: ""
    });
  };

  render() {
    return (
      <div className="shoppingForm">
        <form onSubmit={this.addShoppingItem}>
          <input
            onChange={this.handleInputChange}
            value={this.state.shoppingItem}
            placeholder="Add Shopping List Item"
            name="shoppingListItem"
          />
          <button type="submit">Add Shopping List Item</button>
        </form>
      </div>
    );
  }
}

export default ShoppingForm;
