import React from 'react';
import { func, number } from 'prop-types';
import { connect } from 'react-redux';

import { addResv } from '../../store/actions/actionCreators';

import './Add.css';

function AddTpl({ data, addNew }) {
	return (
		<div>
			{ data < 0 ?
				<form onSubmit={addNew}>
					<h2>Add New Reservation</h2>
					
					<p>
						<input type="text" placeholder="Name" name="name" className="textBox" />
					</p>
					<p>
						<input type="text" placeholder="Hotel" name="hotelName" className="textBox" />
					</p>					
					<p>
						<input type="text" placeholder="Arrival Date YYYY-MM-DD" name="arrivalDate" className="textBox" />
					</p>
					<p>
						<input type="text" placeholder="Departure Date YYYY-MM-DD" name="departureDate" className="textBox" />
					</p>
					<button type="submit">Add</button>
				</form>
				:
				<div>
					Reservation added!
				</div>
			}
		</div>
	);
}

AddTpl.propTypes = {
	addNew: func.isRequired,
	data: number.isRequired
};

function mapStateToProps(store) {
	return {
		data: store.appReducer.addStatus
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		addNew: function(e) {
			e.preventDefault();
			
			const inputList = e.target.querySelectorAll('input');
			const data = {};
			
			for (let i = 0; i < inputList.length; i++) {
				if (inputList[i].value === '') {
					return;
				} else {
					data[inputList[i].name] = inputList[i].value;
				}
			}
			
			//console.log(data);
			dispatch(addResv(data));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTpl);