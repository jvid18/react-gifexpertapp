import { useState } from "react";

import AddCategory from './components/AddCategiry';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const data = ['code'];
  const [ categories, setCategories ] = useState(data); 
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>

      {
        categories.map(category => <GifGrid key={ category } category={ category }/>)
      }
    </>
  );
};

export default GifExpertApp;
