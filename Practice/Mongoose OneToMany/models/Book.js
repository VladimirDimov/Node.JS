var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Author = mongoose.model('Author');

var bookSchema = new Schema({
	title: String,
	year: Number,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author'
	}
});

bookSchema.post('save', function(next, done) {
	var book = this;
	Author.findOne({
		_id: this.author
	}, function(err, foundAuthor) {
		if (err) console.log(err);
		foundAuthor.books.push(book._id);
		foundAuthor.save(function(err, dat) {
			if (err) console.log(err);
			console.log('Author ' + dat.name + ' updated!');
		});
	});
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;