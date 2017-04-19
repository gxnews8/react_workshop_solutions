import React, { Component } from 'react';
import Search from './Search';
import MovieDetails from './MovieDetails';
import { fetchMovieDetailsByTitle } from './api';

class App extends Component {
    state = {
        isLoading: false,
        movieData: null
    }
    getMovieData = (title) => {
        this.setState({
            isLoading: true,
            movieData: null
        })
        return fetchMovieDetailsByTitle(title)
            .then((data) => {
                    this.setState({
                        isLoading: false,
                        movieData: data
                    });
            });
    }   
        
    render(){
        const movieDetails = (this.state.movieData) 
                ? <MovieDetails {...this.state.movieData} /> 
                : null
        return (
            <div>
            <h1>Movie Data</h1>
            <Search onClick={this.getMovieData}/>
            { (this.state.isLoading) ? <h3>Loading...</h3> : null }
            { movieDetails }
            </div>
        )
    }
}

export default App;