var express = require('express');
var mongoose = require('mongoose');
var Author = require('./models/Author');
var Book = require('./models/Book');

var port = 3000;

var app = express();

mongoose.connect('localhost:27017/myapp');


// var pesho = Author({
// 	name: 'Pesho',
// 	age: 100
// });

// var book1 = new Book({
// 	title: 'Title 1',
// 	author: pesho._id
// });

// pesho.save(function(err) {
// 	if (err) {
// 		console.log(err);
// 	};

// 	book1.save(function(err) {
// 		if (err) {
// 			console.log(err);
// 		};

// 		pesho.books.push(book1._id);
// 		pesho.save(function(err, savedPesho) {

// 		});
// 	});
// });

// Author
// 	.findOne({
// 		name: 'Pesho'
// 	})
// 	.populate('books')
// 	.exec(function(err, books) {
// 		if (err) return handleError(err);
// 		console.log(books);
// 	});

// Book
// 	.findOne({
// 		title: 'Title 1'
// 	})
// 	.populate('author')
// 	.exec(function(err, author) {
// 		if (err) return handleError(err);
// 		console.log(author);
// 	});

var gosho = new Author({
	name: 'Gosho',
	age: 50
});

gosho.save(function(err) {
	if (err) console.log(err);

	var book2 = new Book({
		title: 'Title 2',
		author: gosho._id
	});

	book2.save(function(err) {
		if (err) {
			console.log(err);
		};
	});
});


app.listen(port, function() {
	console.log('Server listening on port: ' + port);
})