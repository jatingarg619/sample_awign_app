import React, {Component} from "react";
import Header from "../layouts/header.js"



class App extends Component {

  render(){
 
  	return(
  		
  		<div> 
  		<Header/>

  		<div>{this.props.children}</div>
  	   </div>
  	 
  		)
  }

}

export default App	;