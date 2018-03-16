const express = require('express');
const expressGraphql = require('express-graphql');
const bodyParser = require('body-parser');

const { schema, root } = require('./graphql');

const app = express();
const port = 1628;

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);
app.use('/graphql', expressGraphql({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.get('/reservations', (req, res) => {
	const keys = Object.keys(req.query);
	
	if (keys.length) {
		res.json(root.reservationQuery(req.query));
	} else {
		res.json(root.reservations());
	}
});

app.get('/reservation/:id', (req, res) => {
	res.json(root.reservation(req.params));
});

app.post('/reservation', (req, res) => {
	//console.log(req.body);
	res.json(root.newReservation(req.body));
});

app.listen(port, () => console.log(`Running on localhost:${port}/graphql`));