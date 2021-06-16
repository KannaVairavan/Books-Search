import React from "react";

const BookContext = React.createContext({
    
  title: "",
  author: "",
  description: "",
  image: "",
  link: "",
  
});

export default BookContext;