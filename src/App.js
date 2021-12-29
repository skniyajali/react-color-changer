import './App.css';
import ColorChanger from "./components/ColorChanger/ColorChanger";
import Dropdown from "./components/Dropdown/Dropdown";
import React from "react";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: ""
    }
  }
  util= (param)=>this.setState({color:param});
  //util= (param)=>console.log(param);
  
  render(){
    return (
      <div className="App"  onMouseUp={
        (e)=>{
          const block = document.getElementById("block");
          if (!block.contains(e.target)) {
            block.style.display = 'none';
          }
        }
      }>
        <Dropdown util={this.util}/>
        {/* {console.log(this.state.color)} */}
        <ColorChanger bgc={this.state.color}/>
      </div>
    );
  }
  
}

export default App;
