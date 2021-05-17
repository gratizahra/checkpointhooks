import React from "react";
import { useState } from 'react';
import MovieCard from"./MovieCard";
const ListMovies =({search}) =>{
    const movieList =[
        {
            poster:"https://fr.web.img6.acsta.net/pictures/20/03/09/14/46/0710391.jpg",
            title:"BLACK WIDOW",
            description:" Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises",
            rating:"4"
        },
        {
           
            poster:"https://fr.web.img6.acsta.net/pictures/20/03/09/14/46/0710391.jpg",
            title:"BLACK WIDOW",
            description:" Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises",
            rating:"4" 
        },
        {
            
            poster:"https://fr.web.img6.acsta.net/pictures/20/03/09/14/46/0710391.jpg",
            title:"BLACK WIDOW",
            description:" Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises",
            rating:"4"
        },
    ]
    return(
        <div>
      {movieList.filter(el=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el,i)=><MovieCard key={i} el={el}></MovieCard>)}
        </div>
    )
}
export default ListMovies;