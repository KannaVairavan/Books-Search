import React from "react";

const BookContext = React.createContext({
  book_id:"",  
  title: "",
  author: "",
  description: "",
  image: "",
  link: "",
  
});

export default BookContext;