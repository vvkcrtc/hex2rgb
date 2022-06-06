import React from 'react';
import './App.css';

const errorMsg = "#Ошибка";

class Hex2RGB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "#FFFFFF", rgbstr: ""};
    this.handleChange = this.handleChange.bind(this);
    this.state.rgbstr = this.getRGB(this.state.value);
  }
  
  handleChange(event) {    
    this.setState({value: event.target.value}); 
    this.setState({rgbstr: this.getRGB(event.target.value)}); 
  }
  
  getRGB(hex_color) {
    hex_color = hex_color.replace("#", "")
    var r = parseInt(hex_color.substring(0, 2), 16);
    var g = parseInt(hex_color.substring(2, 4), 16);
    var b = parseInt(hex_color.substring(4, 6), 16);
    if ((isNaN(r) || isNaN(g) || isNaN(b)) && hex_color.length >=6) {
      return errorMsg;
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }
    
  changeBgColor() {
    const body = "body { background-color: " + this.state.value+"; }'}";
    return (
      <style>{body}</style>
    );
  }

  getLabelBgColor() {
    var current = parseInt(this.state.value.replace("#", ""), 16);
    var labelColor = Math.floor (current / 2.5);    
    
    return "#"+labelColor.toString();
  }
  
  render() {
    return (
      <div className="FormStyle">
        <form onSubmit={this.handleSubmit}>  
          {this.changeBgColor()}
          <table className="TableStyle" >
            <tr>
              <td>
                <input className="InputStyle" id="hexinput" type="text" 
                value={this.state.rgbstr === "#Ошибка" ? "#Привет" : this.state.value} onChange={this.handleChange} /> 
              </td>
            </tr>
            <tr style={{backgroundColor: this.getLabelBgColor()}}>
              <td style={{ display: "flex",alignContent: "center", justifyContent: 'center', alignItems: 'center',}}>
              <label className="LabelStyle">{this.state.rgbstr}</label>
              </td>
            </tr>
          </table>

        </form> 
      </div>
    );
  }
}


function App() {
 
return (
  <Hex2RGB />
);
}


export default App;
