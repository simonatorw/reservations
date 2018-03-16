import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import './Details.css';

function DetailsTpl({ details }) {
	return (
		<div className="detailsComp">
		{
			details.name && 
				<div className="details">
					<h2>Details for {details.name}</h2>				
					<p>
						<label className="detailsLabel">Id:</label>{details.id}
					</p>
					<p>
						<label className="detailsLabel">Hotel:</label>{details.hotelName}
					</p>					
					<p>
						<label className="detailsLabel">Arrival Date:</label>{details.arrivalDate}
					</p>
					<p>
						<label className="detailsLabel">Departure Date:</label>{details.departureDate}
					</p>
				</div>
		}
		</div>
	);
}

DetailsTpl.propTypes = {
	details: object.isRequired
};

function mapStateToProps(store) {
	return {
		details: store.dataReducer.details
	};
}

export default connect(mapStateToProps)(DetailsTpl);