import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../src/containers/app.js';
import Interncontainer from '../src/containers/internContainer'
import Projectcontainer from '../src/containers/projectContainer'
import Home from '../src/containers/home'
import { Router, Route, IndexRoute, browserHistory } from "react-router";


class Root extends Component {

	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
			<Router  history={browserHistory}>
			<Route path={`/`} component={App}>
			<IndexRoute component={Home} />
			<Route path="workforce"  component = {Interncontainer}/>
			<Route path="projects"  component = {Projectcontainer}/>
			</Route>
			</Router>
			</Provider>
		)
	}

}

export default Root;


