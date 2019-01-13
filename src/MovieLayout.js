import React, { Component } from 'react';
import MovieDB from './MovieDB';

class MovieLayout extends Component {

    constructor(){
        super();
        this.state = {
            movie : "pokemon"
        }
    }

    movieSearch = (event) => {
        this.setState({movie: event.target.value});
    }

    render(){
        return(
            <div>
                
                <h2>~~~Movie Search~~~</h2>
                <input className = "Submissionfield" type ="text" name="search" placeholder="Movie Title" onChange={this.movieSearch}></input>
                <br></br>
                <br></br>
                <MovieDB movieTitle = {this.state.movie}/>
 
            </div>
        );
    }
}

export default MovieLayout;