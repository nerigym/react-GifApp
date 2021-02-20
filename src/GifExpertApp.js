import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


 const [categories, setCategories] = useState(['Dragon Ball']);

 /*const handleAdd = () => {
   //forma mas directa
  //setCategories( [...categories,'Super Campeones']);
  //callback
  setCategories ( cat => [...cat, 'Super Campeones']);
 }*/

  return (
      <>
      <h2> GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr />

     
      <ol>          
           {  
             categories.map( category => (
               <GifGrid
                  key={ category }
                  category={ category } 
               />
             ))
           }
      </ol>
   
      </>
  )
}

export default GifExpertApp;