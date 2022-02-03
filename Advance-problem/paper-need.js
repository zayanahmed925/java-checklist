var firstBookPage = 100;
var secondBookPage = 200;
var thirdBookPage = 300;
function paperRequirements(book1, book2, book3) {
    var firstBook = book1 * firstBookPage;
    var secondBook = book2 * secondBookPage;
    var thirdBook = book3 * thirdBookPage;

    var totalPage = firstBook + secondBook + thirdBook
    return totalPage;
}
var totalBook = paperRequirements(5, 1, 1);
console.log('Total page needed:', totalBook);