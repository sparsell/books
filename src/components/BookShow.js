import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/useBooksContext';

function BookShow({ book }) {

    const [ showEdit, setShowEdit ] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleSubmit = () => {
      setShowEdit(false);
  };

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    };

    return (
        <div className='book-show'>
          <div>{content}</div>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
          <div className='actions'>
            <button className='edit' onClick={handleEditClick}></button>
            <button className="delete" onClick={handleDeleteClick}></button>
          </div>
        </div>
    );
};

export default BookShow;