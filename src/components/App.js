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
    <div id="main" >
               {/* Do not remove the main div */}
              <ol key="relativeList">
              <li key="relativeListItem1">Rahim</li>
              <li key="relativeListItem2">Saima</li>
              <li key="relativeListItem3">Vishnu</li>
              <li key="relativeListItem4">Alok</li>
              <li key="relativeListItem5">Sayan</li>
            </ol>
            </div>
        )
    }
}


export default App;
