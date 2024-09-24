import { useState, useEffect } from 'react';
import './App.css';
import * as contentful from 'contentful';
import { Header } from './components/header/Header.jsx';

function App() {
  const [headerData, setHeaderData] = useState(null);

  const client = contentful.createClient({
    space: '0es9dhvy2g8b',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '6izYEm6gSNbyeheG8JBrqct5U1tuE-HpFD-HbN7kD9I'
  });

  useEffect(() => {
    client.getEntries({
      content_type: 'Header', 
    })
    .then((response) => {
      if (response.items.length > 0) {
        setHeaderData(response.items[0].fields); 
      }
    })
    .catch(console.error);
  }, []);

  return (
    <>
     
    </>
  );
}

export default App;
