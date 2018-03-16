import React from 'react';

import './Filter.css';

export default function FilterTpl({ filterResv }) {
	return (
		<div className="filter">
			<h3>Filter</h3>
			<form onSubmit={filterResv}>
				<input type="text" placeholder="Hotel" name="hotelName" className="textBox" />
				<input type="text" placeholder="Arrival YYYY-MM-DD" name="arrivalDate" className="textBox" />
				<input type="text" placeholder="Departure YYYY-MM-DD" name="departureDate" className="textBox" />
				<button type="submit">Filter</button>
			</form>
		</div>
	);
}