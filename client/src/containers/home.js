import React, {Component} from "react";
import { Link } from 'react-router'




class Home extends Component {

render(){
	return(
		<div>
		<Link to={`/workforce`} >workforce</Link>
		<Link to={`/projects`} >projects</Link>

		</div>

		)
}

}

export default Home;