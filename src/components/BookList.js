import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';


function BookList({ books, onDelete, onEdit }) {
    const { count, incrementCount } = useContext(BooksContext);

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    })
    
    return (
        <div className='book-list'>
               {count}
              <button onClick={incrementCount}>Click</button>
           
        </div>
    );
};

export default BookList;