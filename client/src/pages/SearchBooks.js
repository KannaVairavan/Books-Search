import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookContext from "../utils/BookContext";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
function Search(){

    const[bookState, setBookState]=useState({
        book_id:"",
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    });
    
    const [search, setSearch] = useState("Python");
    const [error, setError] = useState("");   

    const getbookdata=async( search)=>{
        
        console.log("req search", search)
        API.searchBooks(search).then((res)=>{
            console.log(res.data.items)
            setBookState(res.data.items.map(book=>({
              "book_id": book.id,
              "title": book.volumeInfo.title,
              "author": book.volumeInfo.authors,
              "description": book.volumeInfo.description || "",
              "image": book.volumeInfo.imageLinks.thumbnail,
              "link": book.volumeInfo.infoLink
            })))
        })
    }

    
    const handleInputChange = event => {
        console.log("set search", event.target.value)
        setSearch(event.target.value);
      };
    
      const handleFormSubmit = event => {
        event.preventDefault();
        console.log("click",search);
        getbookdata(search);
      };

      function handleBookSave(event){
        event.preventDefault();
         const targetbook=event.target.attributes    
         console.log("target",targetbook.title.value)
        API.saveBook({
              "book_id": targetbook.book_id.value,
              "title": targetbook.title.value,
              "author": targetbook.author.value,
              "description": targetbook.description.value,
              "image": targetbook.image.value,
              "link": targetbook.link.value
        })
          .then((res) => {
            console.log("db res",res);
          })
          .catch((err) => console.log(err));
        
      }
    return(
        
    <BookContext.Provider value={bookState}>
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search Books</h1>
         
              <SearchForm
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                results={search}
              />
               {console.log("bookstate",bookState)}
              {bookState.length ? (
                   
                    <List>
                      {bookState.map(book => (
                        
                     
                        
                        <ListItem  key={book.book_id}
                            
                            book_id={book.book_id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            image={book.image}
                            link={book.link}
                            onClick={handleBookSave}
                            >Save
                            </ListItem>
                          
                     
                      ))}
                    </List>
              
              ) : (
                <h3>No Results to Display</h3>
              )
              }
        </Container>
      </div>
    </BookContext.Provider>
    )


}

export default Search;