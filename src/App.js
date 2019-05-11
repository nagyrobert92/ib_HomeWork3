import React, { Component } from "react";
import "./App.css";
import Models from "./components/Models";
import { addData } from "./action/AddModel";
import { connect } from "react-redux";
const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};

class App extends Component {
  state = { value: "" };
  updateSelection = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    this.props.addData({ ...data[this.state.value], name: this.state.value });
  };
  render() {
    const pcName = Object.keys(data);
    return (
      <div className="App">
        <Models models={this.state.value} />
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {pcName.map((value, i) => (
            <option key={i} value={value}>
              {value} ({data[value].year})
            </option>
          ))}
        </select>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addData }
)(App);
