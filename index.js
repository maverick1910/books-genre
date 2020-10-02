var array = require('data/books.json')
var book ={};

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.getRandomQuote = function () { 
    var index = randomInt(0,324);
    return array[index].name;
};

module.exports.getQuote = function (take) { 
    var index = randomInt(0,324);
    book.name=array[index].name;
    book.author=array[index].author;
    return book;
};