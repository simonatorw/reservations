import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';

import store from '../../store/store';
import Filter from '../Filter/Filter';
import { getAllResv, getResvById, resetAdd, queryResv } from '../../store/actions/actionCreators';

import './Grid.css';

function GridTpl({ data, selectResv, filterResv }) {
	return (
		<div className="gridComp">
			<Filter filterResv={filterResv} />
			<table className="grid">
				<thead>
					<tr>
						<th className="gridHead">Name</th>
						<th className="gridHead">Hotel</th>
					</tr>
				</thead>
				<tbody>
				{ data.map((cell, i) => 
					<tr key={`${cell.name}_${cell.id}`} className="gridRow">
						<td className="gridCell"><a href="#" onClick={selectResv.bind(this, cell.id)} className="link">{cell.name}</a></td>
						<td className="gridCell">{cell.hotelName}</td>
					</tr>
				)}
				</tbody>
			</table>
		</div>
	);
}

GridTpl.propTypes = {
	data: array.isRequired,
	selectResv: func.isRequired,
	filterResv: func.isRequired
};

class Grid extends Component {
	componentWillMount() {
		store.dispatch(resetAdd(-1));
		store.dispatch(getAllResv());
	}
	
	static propTypes = {
		data: array.isRequired,
		selectResv: func.isRequired,
		filterResv: func.isRequired
	};
	
	render() {
		return (
			<GridTpl data={this.props.data} selectResv={this.props.selectResv} filterResv={this.props.filterResv} />
		);
	}
}

function mapStateToProps(store) {
	return {
		data: store.dataReducer.reservations
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		selectResv: function(id, e) {
			e.preventDefault();
	
			dispatch(getResvById(id));
		},
		filterResv: function(e) {
			e.preventDefault();
			
			const inputList = e.target.querySelectorAll('input');
			const data = {};
			
			for (let i = 0; i < inputList.length; i++) {
				data[inputList[i].name] = inputList[i].value;
			}
			
			//console.log(data);
			dispatch(queryResv(data));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);