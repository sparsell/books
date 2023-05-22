import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books, { id: 123, title }
        ]
        setBooks(updatedBooks);
        console.log(books)
    };

    const editBook = () => {

    };

    const deleteBook = () => {

    };

return (
    <div>
        {books.length}
        <BookCreate onCreate={createBook}/>
    </div>
    );

};

export default App;