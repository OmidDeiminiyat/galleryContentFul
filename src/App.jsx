import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import  {Cards}  from './components/card/CardGallery';


function App() {
  const content_type = 'Gallery';

  return (
    <>
      <Cards content_type={content_type} />
    </>
  )
}

export default App
