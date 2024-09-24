import { useState } from 'react';
import { useEffect } from 'react';
import * as contentful from "contentful";
import { createClient } from 'contentful';
export const Cards = ({props}) => {
    
const [data, setData] = useState(null);

console.log(data);

const client = contentful.createClient({
  space: '0es9dhvy2g8b',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '6izYEm6gSNbyeheG8JBrqct5U1tuE-HpFD-HbN7kD9I'
})
useEffect(() => {
client.getEntries({
  content_type: "Gallery"
})
  .then((entry) => {
    setData(entry)
    
  })
  .catch(console.error);
}, []);

    return (
        <>
        <figure>

        <div>
      {data.items.map((item, index) =>{
        return(
            <>
            <h1>{item.fields.description}</h1>
            <img src={item.fields.image1.fields.file.url} alt="" />
            </>
           
        )
      })}

    </div>
      </figure>
        </>
    )

    
}