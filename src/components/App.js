import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
              relatives: [
        { relativeList: 1, name: "Arafat" },
        { relativeList: 2, name: "aquib" },
        { relativeList: 3, name: "Mahtab" },
      ],
        }
    }
    
    render() {
        
        return(
            <div id="main">
               {/* Do not remove the main div */}
        <ol>
          {this.state.relatives.map((data, i) => {
            return (
              <li key={`relativeListItem${i + 1}`} type="a">
                {data.name}
              </li>
            );
          })}
        </ol>
            </div>
        )
    }
}


export default App;
