import React from 'react';

const MovieDetails = (props) => {
  return (
    <div>
      <h1>Title: {props.title}</h1> 
      <h3>Year: {props.year}</h3>
      <h3>Director: {props.director}</h3>
      <p>Plot: {props.plot}</p>
    </div>
  )
}

export default MovieDetails;