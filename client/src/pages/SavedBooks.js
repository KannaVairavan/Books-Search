import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SavedBooks(){
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

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

    return(
        <h1>Saved Books</h1>
    )
}

export default SavedBooks;