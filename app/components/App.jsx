import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import View from './View/View';
import Add from './Add/Add';

import './App.css';

export default class App extends Component {
	state = {
		view: 'tab selected',
		add: 'tab'
	};
	
	componentWillMount() {
		const cls = location.pathname.substring(1) || 'view';
		
		this.toggleTab(cls);
	}
	
	toggleTab(cls) {
		const tab = {
			view: '',
			add: ''
		};
		
		tab[cls] = ' selected';
		
		this.setState({
			view: `tab${tab.view}`,
			add: `tab${tab.add}`
		});
	}
	
	render() {
		return (
			<Router>
				<div className="container">
					<h1>Reservations Center</h1>
					
					<ul className="tabs">
						<li className="tabContainer"><Link to="/" className={this.state.view} onClick={this.toggleTab.bind(this, 'view')}>View</Link></li>
						<li className="tabContainer"><Link to="/add" className={this.state.add} onClick={this.toggleTab.bind(this, 'add')}>Add New</Link></li>
					</ul>
					
					<Route exact path="/" component={View} />
					<Route path="/add" component={Add} />
				</div>
			</Router>
		);
	}
}