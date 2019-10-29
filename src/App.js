import React, { Component } from 'react';
import './App.css';
import {JsonToTable} from "react-json-to-table";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      got: []
    };
  }

  componentDidMount(){
    fetch("http://ic-research.eastus.cloudapp.azure.com/~mrue/getView.php")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      this.setState({
        got: result
      });
      }
    )
}
  render() {
    const { got } = this.state;
    return (
      <div className={"appContainer"}>
      <div className={"headerContainer"}>
        <h4 className={"header"}>SQLite3 View Example</h4>
        <button className={"updateButton"} onClick={this.componentDidMount()}>
        <p>Update</p>
        </button>
        </div>

        <div className={"tableContainer"}>
          <JsonToTable json={got}/>
        </div>
        <p className={"more"}></p>

      </div>

      // <div className={"reminder"}>
      // <p>Don't forget to insert data</p>
      // </div>
      // <div className={"inserts"}>
      //   <p>Create View Commands</p>
      // </div>
      // <div className={"viewCommands"}>
      //   <p>{"CREATE VIEW eater_to_food_to_num AS SELECT eName, fName, numEat FROM (SELECT * FROM (SELECT * FROM f JOIN comp USING(fid)) JOIN e USING(eid));"}</p>
      //
      // </div>

      // <ul>
      //   {got.map(item => (
      //     <li className={"tablerow"}>
      //       {item.eater} {item.food} {item.num}
      //     </li>
      //   ))}
      // </ul>
    );
  }
}

export default App;
