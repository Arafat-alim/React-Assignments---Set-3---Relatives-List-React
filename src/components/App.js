import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
              relatives: [
        { name: "Arafat" },
        { name: "aquib" },
        { name: "Mahtab" },
      ],
        }
    }
    
    render() {
        
        return(
            <div id="main">
               {/* Do not remove the main div */}
        <ol key={relativeListItem}>
          {this.state.relatives.map((data, i) => {
            return (
              <li key={`relativeListItem${i + 1}`}>
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
