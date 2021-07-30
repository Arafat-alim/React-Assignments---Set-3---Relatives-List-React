import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            relatives : ["arafat", "Aquib", "Asif", "Mehtab", "Ganguly"],
        }
    }
    
    render() {
        
        return(
            <div id="main">
               {/* Do not remove the main div */}
            {this.state.relatives.map((data, i) => {
              return (
             <div key={i}>
                  <ol>
                       <li>{data}</li>
                  </ol>
                </div>
          );
        })}
            </div>
        )
    }
}


export default App;
