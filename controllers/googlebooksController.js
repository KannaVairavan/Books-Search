// AIzaSyAbwQTUX0QNtL9MjXlFd8VBnYTF76MRxZU

const axios =require('axios');


module.exports = {
  bookSearch: function(req, res) {
    let bookTitle=req.query.bookTitle

    const booksresult = axios.get(`https://www.googleapis.com/books/v1/volumes?q=" + ${bookTitle}`)
    .then(resp => {
      return({restaurant: resp.data.results.slice(0,6)});
    })
   
    Promise.all([booksresult]).then((values) => {
      console.log(values);
      res.send({...values[0]});
    });
    
  }
};