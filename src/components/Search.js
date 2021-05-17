import React from 'react';
import Rate from "./Rate"
const Search=({settitleSearch, setRatingSearch, ratingSearch})=>{
    return(<div className='search'>
        <input type='text ' placeholder='Search for a movie ' onChange={(e)=>settitleSearch(e.target.value)}/>
         <Rate className='star-rating' starIndex={setRatingSearch} rating={ratingSearch} />
    </div>)
}
export default Search;