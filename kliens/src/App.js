import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/book') 
      .then((response) => {
        setBookList(response.data)
      })
      .catch(error => console.log(error.message));
  }, []);

  const feltolt = () => {
    Axios.post('http://localhost:5000/book/tolt', { author, title })
      .then(setBookList([...bookList, { author, title }])) 
      .catch(error => console.log(error.message));
  };
  
  return (
    <div>
      <div>
        {bookList.map(book => (
          <ul key={ book._id }>
            
            <li>{ book.author }</li>
            <li>{ book.title }</li>
          </ul>
        ))}
      </div>
      <div>
        <input type="text" placeholder='Author...' onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
        <button onClick={ feltolt }>Feltölt</button>
      </div>
    </div>
  );
}

export default App;