const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('farmeroneregistration.pug');
});

app.get('/login', (req, res) => {
	res.render('login.pug');
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App is listening on Port ${PORT}!`);
});