import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/products";

import Nabvar from "../components/NavBar";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      Search: value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchProduct(this.state.Search);
  }

  render() {
    return (
      <div>
        <Nabvar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    Search: state.products,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProducts: (title) => dispatch(fetchProducts(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
