import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import style from './Header.module.scss';

export const Header = () => {
  const [header, setHeader] = useState(null);

  const client = createClient({
    space: '0es9dhvy2g8b',
    environment: 'master',
    accessToken: '6izYEm6gSNbyeheG8JBrqct5U1tuE-HpFD-HbN7kD9I',
  });


  useEffect(() => {
    client.getEntries({ content_type: 'header' })
      .then((entry) => setHeader(entry))
      .catch(console.error);
  }, []);
  console.log(header);

  return (
    <figure className={style.headerStyle}>

    {header?.items?.map((item, index) =>{
      return(
          <>
          <img src={item.fields.headerimage.fields.file.url} alt="" />
          <figcaption className={style.headerCaption}><h1>{item.fields.headertext}</h1></figcaption>
          </>
         
      )
    })}

    </figure>
  );
};
