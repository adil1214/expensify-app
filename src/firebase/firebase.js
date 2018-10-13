import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCaDhYdbhg60WygApmj6khysq_D1rViCaE',
	authDomain: 'expensefy-2cfd1.firebaseapp.com',
	databaseURL: 'https://expensefy-2cfd1.firebaseio.com',
	projectId: 'expensefy-2cfd1',
	storageBucket: 'expensefy-2cfd1.appspot.com',
	messagingSenderId: '8122225891'
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// const expensesReference = database.ref('expenses');

// let expenses = [
// 	{
// 		note: 'january rent',
// 		amount: 1
// 	}, 	{
// 		note: 'febuary rent',
// 		amount: 2
// 	}, 	{
// 		note: 'march rent',
// 		amount: 3
// 	}, 	{
// 		note: 'april rent',
// 		amount: 4
// 	}
// ];

// // expenses.forEach(e => {
// // 	expensesReference.push(e);
// // });

// database.ref('expenses').once('value', (data) => {
// 	console.log('new value pushed', data.val());
// });
