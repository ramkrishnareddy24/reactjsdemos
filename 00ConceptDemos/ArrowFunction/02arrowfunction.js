const showBook = ({name: bookName, author}) => {
    console.log(`The book ${bookName} is authorised by ${author}.`);
}

const bool = {
    id: 100,
    name: 'Javascript : The Good Parts.',
    author: 'Douglas',
    price: 375,
    publisher: 'Shroff'
};
showBook(book);