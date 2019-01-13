import React, { Component } from 'react';
import axios from 'axios';

class MovieDB extends Component {
constructor(){
    super();
    this.state = {
        movies: [],
        history: []
    }
}
componentDidMount = () => {
    axios.get("http://www.omdbapi.com/?s=" + this.props.movieTitle +"&apikey=f5594988")
        .then(response => {
            console.log(response);
            if (response.data.Search !== undefined){
                this.setState({
                    movies: response.data.Search
                });
                this.setState({
                    history: this.props.movieTitle
                });
            }
            else{
                this.setState({
                    movies: ([
                        {
                            "Title": "No Match Found",
                            "Year": null,
                            "Poster": null
                        }
                    ])
                });
            }
        }).catch(function (error) {
            console.log(error);
        })
}
    render() {
      return (
        <div className="App">
        <button className ="ButtonSize" onClick={this.componentDidMount} type="button">Search</button>
        {(this.state.movies.map(chosenMovie =>
        <div>
            <br></br>Title: {chosenMovie.Title}
            <br></br>Year: {chosenMovie.Year}
            <br></br><img src={chosenMovie.Poster}/>
             </div>
                )
            )}   
        </div>
      );
    }
  }
  
  export default MovieDB;
  