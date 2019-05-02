import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchUser(id);
  }

  fetchUser = id => {
    axios
      .get(`https://arcane-bayou-55024.herokuapp.com/api/user/${id}`)
      .then(response => {
        this.setState(() => ({ user: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.user) {
      return <div>Loading User information...</div>;
    }

    return <div>{this.state.user}</div>;
  }
}

export default Users;
