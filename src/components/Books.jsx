import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books,setbooks]= useState([]);
    const [dataLength,setDataLength]=useState(6);

    useEffect(()=>{
        fetch('FakeBooks.json')
        .then(res => res.json())
        .then(data =>setbooks(data) );
    },[])


    return (
        <div>
            <div  className="grid grid-cols-3 gap-6">
            {
                  books.slice(0,dataLength).map(book =><Book key= {book.id} book={book}></Book>)  
                }
            </div>
            <div className={dataLength === books.length ? 'hidden' : ''}>
                <button
                    onClick={() => setDataLength(books.length)}
                    className="btn btn-primary">Show All Books</button>
            </div>
                
        </div>
    );
};

export default Books;