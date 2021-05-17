import React from"react";
import Rate from"./Rate";
const MovieCard =({poster,title,description,rating})=>{
    return(
        <div className="moviecard">
            <div className="title-movie">
                <h1>{title}</h1>
            </div>
        <div className="poster-movie">
            <img src={poster} alt="image"/>
        </div>
        <div className="descript">
            <p>{description}</p>
        </div>
        <div className="movie-rating">
            <Rate rating={rating}/>
        </div>

        </div>
    )
}
export default MovieCard;
