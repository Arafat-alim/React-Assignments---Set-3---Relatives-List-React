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
            console.log(data.name);
            return <li key={data.relativeList}>{data.relativeList}{data.name}</li>;
          })}
        </ol>
            </div>
        )
    }
}


export default App;
