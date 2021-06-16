import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";

function SavedBooks(){
    const [books, setBooks] = useState([])
    

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
      API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };

     // Delete wishlist by id then reload wishlists
     function deletebook(id){
      API.deleteBook(id)
          .then(res =>loadBooks())
          .catch(err => console.log(err))
  }
  

    return(
      <div>
        <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Saved Books</h1>
        {books.length ? (
                   
                   <List>
                     {books.map(book => (
                       
                    
                       
                       <ListItem  key={book.book_id}
                           
                           book_id={book.book_id}
                           title={book.title}
                           author={book.author}
                           description={book.description}
                           image={book.image}
                           link={book.link}
                           onClick={()=>deletebook(book._id)}
                           >Delete
                           </ListItem>
                         
                    
                     ))}
                   </List>
             
             ) : (
               <h3>No Results to Display</h3>
             )
             }
        </Container>  
      </div>
    )
}

export default SavedBooks;