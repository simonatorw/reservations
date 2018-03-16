const { buildSchema } = require('graphql');

const reservationData = require('./store');

const schema = buildSchema(`
    type Query {
        reservation(id: Int!): Reservation
        reservations: [Reservation]
		reservationQuery(hotelName: String, arrivalDate: String, departureDate: String): [Reservation]
    },
	type Mutation {
		newReservation(name: String!, hotelName: String!, arrivalDate: String!, departureDate: String!): Reservation
	},
	type Reservation {
		name: String
		id: Int
		hotelName: String
		arrivalDate: String
		departureDate: String
	}
`);

function getReservation(args) { 
    const id = args.id;
	
    return reservationData.filter(resv => {
        return resv.id == id;
    })[0];
}

function getReservations(args) {
	return reservationData;
}

function addReservation(args) {
	const id = reservationData.length;
	
	reservationData.push({
		name: args.name,
		id,
		hotelName: args.hotelName,
		arrivalDate: args.arrivalDate,
		departureDate: args.departureDate		
	});
	
	return { id };
}

function queryReservations(args) {
	let matchStr = '';
	const searchKeys = [];
	const keys = Object.keys(args);
	
	keys.forEach(key => {
		matchStr = matchStr + args[key];
		if (args[key]) {
			searchKeys.push(key);
		}
	});
	
	return reservationData.filter(resv => {
		let currentStr = '';
		
		searchKeys.forEach(key => currentStr = currentStr + resv[key]);

        return currentStr.toLowerCase() === matchStr.toLowerCase();
    });
}

const root = {
    reservation: getReservation,
	reservations: getReservations,
	newReservation: addReservation,
	reservationQuery: queryReservations
};

module.exports = {
	schema, root
};