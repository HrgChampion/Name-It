import "./styles.css";
import React from 'react';
import Header from './header'
import "./header.css"
import SearchBox from "./searchbox";
import Result from "./results";
import NameCard from "./namecard";

const name=require("@rstacruz/startup-name-generator")
class App extends React.Component {
  state={
    headerText:"Name It !",
    headerExpanded:true,
    suggestedNames:[],
  }
  handleInputChange=(inputText)=>{
   
    
  this.setState({headerExpanded:!inputText,
                suggestedNames: inputText ? name(inputText):[],
              })
  }
  render(){ 
   
  return (
    <div>
    <Header 
    headerExpanded={this.state.headerExpanded}
    headTitle={this.state.headerText}/>
    <SearchBox onInputChange={this.handleInputChange}/>
    <Result suggestedNames={this.state.suggestedNames}/>
    <NameCard/>
      </div>
    
  );
  }
}
export default App;
